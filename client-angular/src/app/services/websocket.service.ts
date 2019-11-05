import {EventEmitter, Injectable} from '@angular/core';
import {Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {ConfigConstants as CC} from '../constants/config-constants';

@Injectable()
export class WebsocketService {

  public static currentActiveDeviceMacAddress;

  measurementReceiveEvent = new EventEmitter();
  deviceReceiveEvent = new EventEmitter();

  stompClient: any;
  deviceList: any;
  measurements: any;

  constructor(private httpClient: HttpClient) {
    this.webSocketConnect();
    this.getDeviceList();
  }

  webSocketConnect() {
    const ws = new SockJS(CC.SERVER_ADDRESS + CC.WEB_SOCKET_URL);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(CC.DEVICES_URL, (devicesEvent) => {
        this.deviceList = JSON.parse(devicesEvent.body);
        this.deviceReceiveEvent.emit(this.deviceList);
      });
      this.stompClient.subscribe(CC.LIVE_MEASUREMENTS_URL.concat('/').concat(WebsocketService.currentActiveDeviceMacAddress),
        (measurementEvent) => {
          this.measurements = JSON.parse(measurementEvent.body);
          this.measurementReceiveEvent.emit(this.measurements);
        });
    }, this.errorCallBack);
  }

  webSocketDisconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
  }

  errorCallBack() {
    setTimeout(() => {
      this.webSocketDisconnect();
      this.webSocketConnect();
    }, 5000);
  }

  getDeviceList() {
    this.httpClient.get(CC.SERVER_ADDRESS + CC.DEVICES_URL)
      .pipe(
        retry(3)
      ).subscribe(e => {
      this.deviceList = e,
        this.deviceReceiveEvent.emit(this.deviceList);
    });
  }
}
