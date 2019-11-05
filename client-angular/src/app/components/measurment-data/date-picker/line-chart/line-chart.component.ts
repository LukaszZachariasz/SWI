import {Component, Input} from '@angular/core';
import {ConfigConstants as CC_EXT} from '../../../../constants/config-constants';
import {DisplayConstants as DC_EXT} from '../../../../constants/display-constants';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {

  private CC = CC_EXT;
  private DC = DC_EXT;

  @Input() historicalDataInLineChart;
  isLineOnChartDrawing = true;

  public chartLabels: Array<any> = [];

  public chartColors: Array<any> = [
    {backgroundColor: DC_EXT.LINE_CHART_BACKGROUND_SET_1},
    {backgroundColor: DC_EXT.LINE_CHART_BACKGROUND_SET_2}
  ];

  public temperatureChartOption: any = {
    scales: {
      yAxes: [{
        ticks: {
          max: 100,
          min: 0,
          stepSize: 10
        },
        scaleLabel: {
          display: true,
          labelString: DC_EXT.TEMPERATURE_CHART_LABEL
        }
      }],
      xAxes: [{
        ticks: {},
        scaleLabel: {
          display: true,
          labelString: DC_EXT.TIME_CHART_LABEL
        }
      }]
    },
  };

  public percentageChartOption: any = {
    scales: {
      yAxes: [{
        ticks: {
          max: 100,
          min: 0,
          stepSize: 10
        },
        scaleLabel: {
          display: true,
          labelString: DC_EXT.PERCENTAGE_CHART_LABEL
        }
      }],
      xAxes: [{
        ticks: {},
        scaleLabel: {
          display: true,
          labelString: DC_EXT.TIME_CHART_LABEL
        }
      }]
    },
  };

  constructor() {
  }

  public temperatureDataSets: Array<any> = [
    {data: [], label: DC_EXT.AIR_TEMPERATURE_LABEL, showLine: this.isLineOnChartDrawing, pointRadius: 10, pointHoverRadius: 20},
    {data: [], label: DC_EXT.WATER_TEMPERATURE_LABEL, showLine: this.isLineOnChartDrawing, pointRadius: 10, pointHoverRadius: 20}
  ];

  public percentageDataSets: Array<any> = [
    {data: [], label: DC_EXT.WATER_LEVEL_LABEL, showLine: this.isLineOnChartDrawing, pointRadius: 10, pointHoverRadius: 20},
    {data: [], label: DC_EXT.HUMIDITY_LABEL, showLine: this.isLineOnChartDrawing, pointRadius: 10, pointHoverRadius: 20}
  ];

  public chartRefresh() {
    const airTempData: Array<number> = [];
    const waterTempData: Array<number> = [];
    const airHumidityData: Array<any> = [];
    const waterLevelData: Array<any> = [];
    const localDateTimeData: Array<any> = [];

    setTimeout(() => {
      for (const key in this.historicalDataInLineChart) {
        airTempData.push(this.historicalDataInLineChart[key].airTemperature);
        airHumidityData.push(this.historicalDataInLineChart[key].airHumidity);
        waterTempData.push(this.historicalDataInLineChart[key].waterTemperature);
        waterLevelData.push(this.historicalDataInLineChart[key].waterLevel);
        localDateTimeData.push(this.historicalDataInLineChart[key].localDateTime);
      }

      this.chartLabels = localDateTimeData;
      this.temperatureDataSets[0].data = airTempData;
      this.temperatureDataSets[1].data = waterTempData;
      this.percentageDataSets[0].data = airHumidityData;
      this.percentageDataSets[1].data = waterLevelData;
    }, 1000);
  }
}


