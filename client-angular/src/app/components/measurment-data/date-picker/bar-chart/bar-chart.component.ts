import {Component, Input} from '@angular/core';
import {DisplayConstants as DC_EXT} from '../../../../constants/display-constants';
import {ConfigConstants as CC_EXT} from '../../../../constants/config-constants';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {

  constructor() {
  }

  private DC = DC_EXT;
  private CC = CC_EXT;

  @Input() maxAirTemperature: any;
  @Input() minAirTemperature: any;
  @Input() avgAirTemperature: any;
  @Input() maxHumidity: any;
  @Input() minHumidity: any;
  @Input() avgHumidity: any;
  @Input() maxSolarRadiation: any;
  @Input() minSolarRadiation: any;
  @Input() avgSolarRadiation: any;

  @Input() avgRainIntensity: any;
  @Input() avgWindSpeed: any;
  @Input() avgBarometricPressure: any;

  @Input() minRainIntensity: any;
  @Input() minWindSpeed: any;
  @Input() minBarometricPressure: any;

  @Input() maxRainIntensity: any;
  @Input() maxWindSpeed: any;
  @Input() maxBarometricPressure: any;


  public AirTemperatureSet = [0, 0, 0];
  public HumiditySet = [0, 0, 0];
  public SolarRadiationSet = [0, 0, 0];
  public RainIntensitySet = [0, 0, 0];
  public WindSpeed = [0, 0, 0];
  public BarometricPressureSet = [0, 0, 0];


  public chartColors = [{
    backgroundColor: DC_EXT.BAR_CHART_BACKGROUND_COLOR,
    borderColor: DC_EXT.BAR_CHART_BORDER_COLOR,
    borderWidth: DC_EXT.BAR_CHART_BORDER_SIZE,
  }];

  public percentageOptions: any = {
    scales: {
      yAxes: [{
        ticks: {min: 0, stepSize: 10, max: 100},
        scaleLabel: {display: true, labelString: DC_EXT.PERCENTAGE_CHART_LABEL},
      }]
    }
  };

  public windSpeedOptions: any = {
    scales: {
      yAxes: [{
        scaleLabel: {display: true, labelString: DC_EXT.WIND_SPEED_LABEL}
      }],
      xAxes: [{
        scaleLabel: {display: true, labels: []}
      }]
    }
  };

  public pressureOptions: any = {
    scales: {
      yAxes: [{
        scaleLabel: {display: true, labelString: DC_EXT.PRESSURE_CHART_LABEL}
      }],
      xAxes: [{
        scaleLabel: {display: true, labels: []}
      }]
    }
  };

  public solarRadiationOptions: any = {
    scales: {
      yAxes: [{
        scaleLabel: {display: true, labelString: DC_EXT.SOLAR_RADIATION_LABEL}
      }],
      xAxes: [{
        scaleLabel: {display: true, labels: []}
      }]
    }
  };

  public temperatureOptions: any = {
    scales: {
      yAxes: [{
        scaleLabel: {display: true, labelString: DC_EXT.TEMPERATURE_CHART_LABEL}
      }],
      xAxes: [{
        scaleLabel: {display: true, labels: []}
      }]
    }
  };

  public rainOptions: any = {
    scales: {
      yAxes: [{
        scaleLabel: {display: true, labelString: DC_EXT.RAIN_INTENSITY_LABEL}
      }],
      xAxes: [{
        scaleLabel: {display: true, labels: []}
      }]
    }
  };

  public dataRefresh() {
    this.AirTemperatureSet = [
      this.minAirTemperature ? this.minAirTemperature : 0,
      this.maxAirTemperature ? this.maxAirTemperature : 0,
      this.avgAirTemperature ? this.avgAirTemperature : 0
    ];

    this.HumiditySet = [
      this.minHumidity ? this.minHumidity : 0,
      this.maxHumidity ? this.maxHumidity : 0,
      this.avgHumidity ? this.avgHumidity : 0
    ];

    this.SolarRadiationSet = [
      this.minSolarRadiation ? this.minSolarRadiation : 0,
      this.maxSolarRadiation ? this.maxSolarRadiation : 0,
      this.avgSolarRadiation ? this.avgSolarRadiation : 0
    ];

    this.RainIntensitySet = [
      this.minRainIntensity ? this.minRainIntensity : 0,
      this.maxRainIntensity ? this.maxRainIntensity : 0,
      this.avgRainIntensity ? this.avgRainIntensity : 0
    ];

    this.WindSpeed = [
      this.minWindSpeed ? this.minWindSpeed : 0,
      this.maxWindSpeed ? this.maxWindSpeed : 0,
      this.avgWindSpeed ? this.avgWindSpeed : 0
    ];

    this.BarometricPressureSet = [
      this.minBarometricPressure ? this.minBarometricPressure : 0,
      this.maxBarometricPressure ? this.maxBarometricPressure : 0,
      this.avgBarometricPressure ? this.avgBarometricPressure : 0
    ];

  }

}
