import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';
import {ConfigConstants} from '../constants/config-constants';

@Injectable()
export class HistoricalFetchService {

  constructor(private http: HttpClient) {
  }

  fetchHistoricalDataFromService(pickedStartDate: string, pickedEndDate: string, interval: number): Observable<object> {
    return this.http.get(ConfigConstants.HISTORICAL_MEASUREMENTS_URL).pipe(retry(3));
  }
}

