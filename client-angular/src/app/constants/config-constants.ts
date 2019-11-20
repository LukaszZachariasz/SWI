export class ConfigConstants {

  public static readonly SERVER_ADDRESS = 'http://localhost:8080';
  public static readonly WEB_SOCKET_URL = '/ServerWebSocket/';
  public static readonly DEVICES_URL = '/devices';
  public static readonly LIVE_MEASUREMENTS_URL = '/measurements';
  public static readonly HISTORICAL_MEASUREMENTS_URL = 'http://localhost:8080'; //'../assets/data.json';
  public static readonly WATER_LEVEL_SET_URL = '?waterLevel=';

  public static readonly LOCALE_DATE_FORMAT = 'en-GB';

  public static readonly BAR_CHART_TYPE = 'bar';
  public static readonly LINE_CHART_TYPE = 'line';

  public static readonly MIN_WATER_LEVEL = 0;
  public static readonly STEP_WATER_LEVEL = 1;
  public static readonly MAX_WATER_LEVEL = 100;

}
