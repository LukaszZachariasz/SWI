import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HistoricalFetchService {

  constructor(private http: HttpClient) {
  }

  fetchHistoricalDataFromService(pickedStartDate: string, pickedEndDate: string, interval: number): Observable<object> {

    const headers = new HttpHeaders();
    headers.append('content', 'application/json');
    const params = new HttpParams().set('startDate', pickedStartDate).set('endDate', pickedEndDate);

    console.log(pickedStartDate + '  ' + pickedEndDate);
    return this.http.get('http://localhost:8080/getDateRange', {headers: headers, params: params});
  }

  fetchPageDataFromService(pageNumber: number, pageSize: number): Observable<object> {

    const headers = new HttpHeaders();
    headers.append('content', 'application/json');
    const params = new HttpParams().set('pageNumber', pageNumber.toString()).set('pageSize', pageSize.toString());

    return this.http.get('http://localhost:8080/getPage', {headers: headers, params: params});
  }
}

