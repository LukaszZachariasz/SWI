import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DisplayConstants as DC_EXT} from '../../../../constants/display-constants';
import {FetchService} from '../../../../services/fetch.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  private DC = DC_EXT;
  private availableDevices: any = [];

  @Output() devicePickEvent = new EventEmitter<string>();

  constructor(private fetchService: FetchService) {
  }

  ngOnInit() {
    this.refreshDeviceList();
  }

  refreshDeviceList() {
    this.fetchService.fetchDevices().subscribe((allDevices) => {
      this.availableDevices = allDevices;
    });
  }

  setCurrentPickedDevice(device) {
    this.devicePickEvent.emit(device);
  }

  isDeviceList() {
    return this.availableDevices.length != 0;
  }
}
