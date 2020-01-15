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

  @Input()
  private allValuesInDateRange;
  private isLineOnChartDrawing = true;
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
        ticks: {},
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

  public solarRadiationChartOption: any = {
    scales: {
      yAxes: [{
        ticks: {},
        scaleLabel: {
          display: true,
          labelString: DC_EXT.SOLAR_RADIATION_LABEL
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
        ticks: {},
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

  public pressureChartOption: any = {
    scales: {
      yAxes: [{
        ticks: {},
        scaleLabel: {
          display: true,
          labelString: DC_EXT.PRESSURE_CHART_LABEL
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

  public temperatureDataSet: Array<any> = [
    {
      data: [],
      label: DC_EXT.AIR_TEMPERATURE_LABEL,
      showLine: this.isLineOnChartDrawing,
      pointRadius: this.pointRadius,
      pointHoverRadius: this.pointRadiusHover
    },
    {
      data: [],
      label: DC_EXT.BULB_TEMPERATURE_LABEL,
      showLine: this.isLineOnChartDrawing,
      pointRadius: this.pointRadius,
      pointHoverRadius: this.pointRadiusHover
    }
  ];

  public humidityDataSet: Array<any> = [
    {
      data: [],
      label: DC_EXT.HUMIDITY_DATA_LABEL,
      showLine: this.isLineOnChartDrawing,
      pointRadius: this.pointRadius,
      pointHoverRadius: this.pointRadiusHover
    }
  ];

  public pressureDataSet: Array<any> = [
    {
      data: [],
      label: DC_EXT.BAROMETRIC_PRESSURE,
      showLine: this.isLineOnChartDrawing,
      pointRadius: this.pointRadius,
      pointHoverRadius: this.pointRadiusHover
    }
  ];

  public windDataSet: Array<any> = [
    {
      data: [],
      label: DC_EXT.WIND_SPEED_LABEL,
      showLine: this.isLineOnChartDrawing,
      pointRadius: this.pointRadius,
      pointHoverRadius: this.pointRadiusHover
    }
  ];

  public solarRadiationDataSet: Array<any> = [
    {
      data: [],
      label: DC_EXT.SOLAR_RADIATION_LABEL,
      showLine: this.isLineOnChartDrawing,
      pointRadius: this.pointRadius,
      pointHoverRadius: this.pointRadiusHover
    }
  ];

  public normalizedDataSet: Array<any> = [
    {
      data: [],
      label: DC_EXT.WIND_SPEED_LABEL,
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
      label: DC_EXT.BAROMETRIC_PRESSURE,
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
    {
      data: [],
      label: DC_EXT.AIR_TEMPERATURE_LABEL,
      showLine: this.isLineOnChartDrawing,
      pointRadius: this.pointRadius,
      pointHoverRadius: this.pointRadiusHover
    }
  ];

  public largeDataSet: Array<any> = [
    {data: [], label: DC_EXT.RAIN_INTENSITY_LABEL, showLine: this.isLineOnChartDrawing, pointRadius: this.pointRadius, pointHoverRadius: 0}
  ];

  public chartRefresh() {
    const airTemperature: Array<number> = [];
    const wetBulbTemperature: Array<number> = [];
    const solarRadiation: Array<number> = [];
    const humidity: Array<any> = [];
    const measurementDate: Array<any> = [];
    const rainIntensity: Array<any> = [];
    const barometricPressure: Array<any> = [];
    const windSpeed: Array<any> = [];

    setTimeout(() => {
      for (const key in this.allValuesInDateRange) {
        airTemperature.push(this.allValuesInDateRange[key].airTemperature);
        wetBulbTemperature.push(this.allValuesInDateRange[key].wetBulbTemperature);
        humidity.push(this.allValuesInDateRange[key].humidity);
        solarRadiation.push(this.allValuesInDateRange[key].solarRadiation);
        rainIntensity.push(this.allValuesInDateRange[key].rainIntensity);
        barometricPressure.push(this.allValuesInDateRange[key].barometricPressure);
        windSpeed.push(this.allValuesInDateRange[key].windSpeed);
        measurementDate.push(this.allValuesInDateRange[key].measurementDate);
      }

      this.chartLabels = measurementDate;
      this.temperatureDataSet[0].data = airTemperature;
      this.temperatureDataSet[1].data = wetBulbTemperature;
      this.humidityDataSet[0].data = humidity;
      this.pressureDataSet[0].data = barometricPressure;
      this.solarRadiationDataSet[0].data = solarRadiation;
      this.windDataSet[0].data = windSpeed;

      this.normalizedDataSet[0].data = this.normalizeDataSetValues(this.windDataSet[0].data);
      this.normalizedDataSet[1].data = this.normalizeDataSetValues(this.solarRadiationDataSet[0].data);
      this.normalizedDataSet[2].data = this.normalizeDataSetValues(this.pressureDataSet[0].data);
      this.normalizedDataSet[3].data = this.normalizeDataSetValues(this.humidityDataSet[0].data);
      this.normalizedDataSet[4].data = this.normalizeDataSetValues(this.temperatureDataSet[0].data);

    }, 1000);
  }


  normalizeDataSetValues(array: Array<number>) {

    let maxVal = 0;
    let minVal = 0;

    array.forEach(element => {
      if (maxVal < element) {
        maxVal = element;
      }

      if (minVal > element) {
        minVal = element;
      }
    });

    const normalizedArray: Array<number> = [];

    array.forEach(element => {
      normalizedArray.push(this.normalize(element, maxVal, minVal));
    });

    return normalizedArray;
  }

  normalize(val, max, min) {
    return (val - min) / (max - min);
  }

}


