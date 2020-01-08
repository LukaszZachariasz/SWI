import {Component, Input} from '@angular/core';
import {ConfigConstants as CC_EXT} from '../../../../constants/config-constants';
import {DisplayConstants as DC_EXT} from '../../../../constants/display-constants';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {

  constructor() {
  }

  private CC = CC_EXT;
  private DC = DC_EXT;

  @Input() allValuesInDateRange;
  isLineOnChartDrawing = true;

  private pointRadius = 2;
  private pointRadiusHover = 5;

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
          display: false,
          labelString: ''
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

  public chartDataSet: Array<any> = [
    {
      data: [],
      label: DC_EXT.AIR_TEMPERATURE_LABEL,
      showLine: this.isLineOnChartDrawing,
      pointRadius: this.pointRadius,
      pointHoverRadius: this.pointRadiusHover
    },
    {
      data: [],
      label: DC_EXT.SOLAR_RADIATION_LABEL,
      showLine: this.isLineOnChartDrawing,
      pointRadius: this.pointRadius,
      pointHoverRadius: this.pointRadiusHover
    },
    {
      data: [],
      label: DC_EXT.HUMIDITY_DATA_LABEL,
      showLine: this.isLineOnChartDrawing,
      pointRadius: this.pointRadius,
      pointHoverRadius: this.pointRadiusHover
    },
  ];

  public largeDataSet: Array<any> = [
    {data: [], label: DC_EXT.RAIN_INTENSITY_LABEL, showLine: this.isLineOnChartDrawing, pointRadius: this.pointRadius, pointHoverRadius: 0}
  ];

  public chartRefresh() {
    const airTemperature: Array<number> = [];
    const solarRadiation: Array<number> = [];
    const humidity: Array<any> = [];
    const measurementDate: Array<any> = [];
    const rainIntensity: Array<any> = [];

    setTimeout(() => {
      for (const key in this.allValuesInDateRange) {
        airTemperature.push(this.allValuesInDateRange[key].airTemperature);
        humidity.push(this.allValuesInDateRange[key].humidity);
        solarRadiation.push(this.allValuesInDateRange[key].solarRadiation);
        rainIntensity.push(this.allValuesInDateRange[key].rainIntensity);
        measurementDate.push(this.allValuesInDateRange[key].measurementDate);
      }

      this.chartLabels = measurementDate;
      this.chartDataSet[0].data = airTemperature;
      this.chartDataSet[1].data = solarRadiation;
      this.chartDataSet[2].data = humidity;
      this.largeDataSet[0].data = rainIntensity;
    }, 1000);
  }
}


