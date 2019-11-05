import {Component, Input} from '@angular/core';
import {DisplayConstants as DC_EXT} from '../../../constants/display-constants';
import {ConfigConstants as CC_EXT} from '../../../constants/config-constants';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {

  private DC = DC_EXT;
  private CC = CC_EXT;

  @Input() airTemperature: any;
  @Input() waterTemperature: any;
  @Input() humidity: any;
  @Input() waterLevel: any;

  lastKnowAirTemperature = 0;
  lastKnowWaterTemperature = 0;

  public chartHumidityDataset = [0];
  public chartWaterLevelDataset = [0];
  public chartColors = [{
    backgroundColor: DC_EXT.BAR_CHART_BACKGROUND_COLOR,
    borderColor: DC_EXT.BAR_CHART_BORDER_COLOR,
    borderWidth: DC_EXT.BAR_CHART_BORDER_SIZE,
  }];


  public chartOptions: any = {
    scales: {
      yAxes: [{
        ticks: {min: 0, stepSize: 10, max: 100},
        scaleLabel: {display: true, labelString: DC_EXT.PERCENTAGE_CHART_LABEL},
      }]
    }
  };

  constructor() {
  }

  public liveDataRefresh() {
    this.humidity ? this.chartHumidityDataset = [this.humidity] : {};
    this.waterLevel ? this.chartWaterLevelDataset = [this.waterLevel] : {};
    this.airTemperature ? this.lastKnowAirTemperature = this.airTemperature : {};
    this.waterTemperature ? this.lastKnowWaterTemperature = this.waterTemperature : {};
  }
}
