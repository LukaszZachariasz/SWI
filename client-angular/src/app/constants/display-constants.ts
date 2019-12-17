import {TimeInterval} from '../models/time-interval';

export class DisplayConstants {

  public static readonly WATER_LEVEL_LABEL = ['Water'];
  public static readonly AIR_TEMPERATURE_LABEL = ['Air Temperature'];
  public static readonly WATER_TEMPERATURE_LABEL = ['Water Temperature'];
  public static readonly HUMIDITY_LABEL = ['Humidity'];
  public static readonly APPLY_BUTTON_LABEL = 'Apply';
  public static readonly HUMIDITY_WATER_DATA_LABEL = 'Humidity and Water';
  public static readonly TEMPERATURE_DATA_LABEL = 'Temperature';
  public static readonly LOADING_DEVICE_LABEL = 'Loading available farm devices';
  public static readonly LIVE_DATA_LOADING = 'Live Data Loading';
  public static readonly SELECT_DEVICE_LABEL = 'Please select device';
  public static readonly ONLINE_DEVICE_LABEL = 'Online farm devices';

  public static readonly BAR_CHART_BACKGROUND_COLOR = 'rgba(100, 255, 255, 0.2)';
  public static readonly BAR_CHART_BORDER_COLOR = 'rgba(100, 255, 132, 1)';
  public static readonly BAR_CHART_BORDER_SIZE = 5;

  public static readonly LINE_CHART_BACKGROUND_SET_1 = 'rgba(105, 0, 132, 0.4)';
  public static readonly LINE_CHART_BACKGROUND_SET_2 = 'rgba(0, 137, 132, 0.4)';
  public static readonly LINE_CHART_BACKGROUND_SET_3 = 'rgba(105, 88, 10, 0.4)';
  public static readonly LINE_CHART_BACKGROUND_SET_4 = 'rgba(55, 137, 80, 0.4)';

  public static readonly PERCENTAGE_CHART_LABEL = 'Level [%]';
  public static readonly TEMPERATURE_CHART_LABEL = 'Temperature [C°]';
  public static readonly TIME_CHART_LABEL = 'Time';

  public static readonly LAST_DAY_LABEL = 'Last Day';
  public static readonly LAST_WEEK_LABEL = 'Last Week';
  public static readonly LAST_MONTH_LABEL = 'Last Month';
  public static readonly LAST_6_MONTHS_LABEL = 'Last 6 Months';
  public static readonly INVALID_DATE_INFO = 'Please select valid Date';
  public static readonly START_DATE_LABEL = 'Start Date';
  public static readonly END_DATE_LABEL = 'End Date';
  public static readonly TIME_INTERVAL_LABEL = 'Time Interval';

  public static readonly FARM_DETAILS_TITLE = 'Selected Farm Details';
  public static readonly LIVE_SECTION_TITLE = 'Live Data';
  public static readonly HISTORICAL_SECTION_TITLE = 'Historical Data';
  public static readonly DATASET_MANAGEMENT = 'Dataset Management';
  public static readonly DATA_PREPARING_TITLE = 'Data Preparing';
  public static readonly DEVICE_CONTROL_TITLE = 'Device Control';
  public static readonly SOLAR_RADIATION_LABEL = 'Solar Radiation';
  public static readonly DATA_CHART_LABEL = 'Data Chart';
  public static readonly BAROMETRIC_PRESSURE = 'Barometric Pressure';
  public static readonly RAIN_INTENSITY_LABEL = 'Rain intensity';

  public static readonly TITLE = 'Welcome to Weather Analysis System';
  public static readonly SUBTITLE = 'Thank you for using our product. We are glad you are with us.';


  public static readonly TIME_INTERVAL_SET: TimeInterval[] = [
    {minutes: 15, displayValue: '15 min'},
    {minutes: 30, displayValue: '30 min'},
    {minutes: 60, displayValue: '1 h'},
    {minutes: 120, displayValue: '2 h'},
    {minutes: 240, displayValue: '4 h'},
    {minutes: 360, displayValue: '6 h'},
    {minutes: 720, displayValue: '12 h'},
    {minutes: 1440, displayValue: '24 h'}
  ];
}
