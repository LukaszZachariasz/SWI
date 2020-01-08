import {PageSizeValues} from '../models/page-size-values';

export class DisplayConstants {

  public static readonly AIR_TEMPERATURE_LABEL = ['Air Temperature'];
  public static readonly BAR_CHART_LABELS = ['Min', 'Max', 'Avg'];
  public static readonly HUMIDITY_DATA_LABEL = 'Humidity';
  public static readonly LOADING_DATA = 'Waiting for Data';
  public static readonly SELECT_DEVICE_LABEL = 'Please select device';
  public static readonly ONLINE_DEVICE_LABEL = 'Available Measurement Devices';

  public static readonly BAR_CHART_BACKGROUND_COLOR = 'rgba(100, 255, 255, 0.2)';
  public static readonly BAR_CHART_BORDER_COLOR = 'rgba(100, 255, 132, 1)';
  public static readonly BAR_CHART_BORDER_SIZE = 5;

  public static readonly LINE_CHART_BACKGROUND_SET_1 = 'rgba(105, 0, 132, 0.4)';
  public static readonly LINE_CHART_BACKGROUND_SET_2 = 'rgba(0, 137, 132, 0.4)';
  public static readonly LINE_CHART_BACKGROUND_SET_3 = 'rgba(105, 88, 10, 0.4)';
  public static readonly LINE_CHART_BACKGROUND_SET_4 = 'rgba(55, 137, 80, 0.4)';

  public static readonly PERCENTAGE_CHART_LABEL = 'Level [%]';
  public static readonly WIND_SPEED_LABEL = 'Speed [km/h]';
  public static readonly TEMPERATURE_CHART_LABEL = 'Temperature [C°]';
  public static readonly TIME_CHART_LABEL = 'Time';

  public static readonly LAST_DAY_LABEL = 'Last Day';
  public static readonly LAST_WEEK_LABEL = 'Last Week';
  public static readonly LAST_MONTH_LABEL = 'Last Month';
  public static readonly LAST_6_MONTHS_LABEL = 'Last 6 Months';
  public static readonly INVALID_DATE_INFO = 'Please select valid Date';
  public static readonly START_DATE_LABEL = 'Start Date';
  public static readonly END_DATE_LABEL = 'End Date';
  public static readonly PAGE_SIZE_LABEL = 'Amount of Rows to Display';

  public static readonly DATA_ANALYSIS_TITLE = 'Data Analysis';
  public static readonly DATASET_MANAGEMENT = 'Dataset Management';
  public static readonly DATA_PREPARING_TITLE = 'Data Preparing';
  public static readonly SOLAR_RADIATION_LABEL = 'Solar Radiation';
  public static readonly DATA_CHART_LABEL = 'Data Chart';
  public static readonly RAIN_INTENSITY_LABEL = 'Rain intensity';

  public static readonly TITLE = 'Welcome to Weather Analysis System';
  public static readonly SUBTITLE = 'Thank you for using our product. We are glad you are with us.';


  public static readonly PAGE_SIZE_SET: PageSizeValues[] = [
    {capacity: 100, displayValue: '100 rows'},
    {capacity: 1000, displayValue: '1000 rows'},
    {capacity: 2000, displayValue: '2000 rows'},
    {capacity: 5000, displayValue: '5000 rows'},
    {capacity: 8000, displayValue: '8000 rows'},
    {capacity: 10000, displayValue: '10000 rows'},
    {capacity: 0, displayValue: 'All rows'},
  ];
}
