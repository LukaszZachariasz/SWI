import {Component, ViewChild} from '@angular/core';
import {WebsocketService} from './services/websocket.service';
import {MeasurementDataComponent} from './components/measurment-data/measurment-data.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentActiveDevice: any;

  @ViewChild(MeasurementDataComponent, {static: false}) measurementDataComponent: MeasurementDataComponent;
  constructor(private websocketService: WebsocketService) {
  }

  receivePickedDevice($event) {
    this.measurementDataComponent.liveDataReset();
    this.currentActiveDevice = $event;
    WebsocketService.currentActiveDeviceMacAddress = this.currentActiveDevice['macAddress'];
    this.websocketService.webSocketDisconnect();
    this.websocketService.webSocketConnect();
  }
}
