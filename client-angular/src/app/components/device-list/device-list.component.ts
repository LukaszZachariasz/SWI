import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';
import {DisplayConstants as DC_EXT} from '../../constants/display-constants';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  private DC = DC_EXT;

  @Output() devicePickEvent = new EventEmitter<string>();

  availableDevices: any;

  constructor(private websocketService: WebsocketService) {
  }

  ngOnInit() {
    this.websocketService.deviceReceiveEvent.subscribe((allDevices) => {
      this.availableDevices = allDevices;
    });
  }

  setCurrentPickedDevice(device) {
    this.devicePickEvent.emit(device);
  }
}
