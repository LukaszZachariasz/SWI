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
    {backgroundColor: DC_EXT.LINE_CHART_BACKGROUND_SET_2},
    {backgroundColor: DC_EXT.LINE_CHART_BACKGROUND_SET_3},
    {backgroundColor: DC_EXT.LINE_CHART_BACKGROUND_SET_4}
  ];

  public temperatureChartOption: any = {
    scales: {
      yAxes: [{
        ticks: {
          // max: 100,
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
          // max: 100,
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
    {data: [], label: DC_EXT.AIR_TEMPERATURE_LABEL, showLine: this.isLineOnChartDrawing, pointRadius: 0, pointHoverRadius: 0},
    {data: [], label: DC_EXT.SOLAR_RADIATION_LABEL, showLine: this.isLineOnChartDrawing, pointRadius: 0, pointHoverRadius: 0},
    {data: [], label: DC_EXT.HUMIDITY_LABEL, showLine: this.isLineOnChartDrawing, pointRadius: 0, pointHoverRadius: 0},
  ];

  public largeDataSet: Array<any> = [
    {data: [], label: DC_EXT.RAIN_INTENSITY_LABEL, showLine: this.isLineOnChartDrawing, pointRadius: 0, pointHoverRadius: 0}
  ];

  public chartRefresh() {
    const airTemperature: Array<number> = [];
    const solarRadiation: Array<number> = [];
    const humidity: Array<any> = [];
    const measurementDate: Array<any> = [];
    const rainIntensity: Array<any> = [];

    setTimeout(() => {
      for (const key in this.historicalDataInLineChart) {
        airTemperature.push(this.historicalDataInLineChart[key].airTemperature);
        humidity.push(this.historicalDataInLineChart[key].humidity);
        solarRadiation.push(this.historicalDataInLineChart[key].solarRadiation);
        rainIntensity.push(this.historicalDataInLineChart[key].rainIntensity);
        measurementDate.push(this.historicalDataInLineChart[key].measurementDate);
      }

      this.chartLabels = measurementDate;
      this.temperatureDataSets[0].data = airTemperature;
      this.temperatureDataSets[1].data = solarRadiation;
      this.temperatureDataSets[2].data = humidity;
      this.largeDataSet[0].data = rainIntensity;
    }, 1000);
  }
}


