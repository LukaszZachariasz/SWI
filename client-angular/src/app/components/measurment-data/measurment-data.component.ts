import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {DisplayConstants as DC_EXT} from '../../constants/display-constants';

@Component({
  selector: 'app-measurment-data',
  templateUrl: './measurment-data.component.html',
  styleUrls: ['./measurment-data.component.scss']
})
export class MeasurementDataComponent implements AfterViewInit {

  private DC = DC_EXT;
  private liveData: any;

  @Input() measurementDevice: any;
  @ViewChild(BarChartComponent, {static: false}) liveDataComponent: BarChartComponent;

  constructor(private websocketService: WebsocketService) {
    this.liveDataComponent = new BarChartComponent();
  }

  ngAfterViewInit(): void {
    this.websocketService.measurementReceiveEvent.subscribe((measurement) => {
      this.reloadLiveData(measurement);
    });
  }

  private reloadLiveData(measurement) {
    this.liveData = measurement;
    if (this.liveDataComponent) {
      this.liveDataComponent.liveDataRefresh();
    }
  }

  public liveDataReset() {
    this.liveData = null;
  }
}
