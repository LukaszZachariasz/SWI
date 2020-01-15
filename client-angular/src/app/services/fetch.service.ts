import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class FetchService {

  constructor(private http: HttpClient) {
  }

  fetchDevices(): Observable<object> {
    const headers = new HttpHeaders();
    headers.append('content', 'application/json');

    return this.http.get('http://localhost:8080/getDevices', {headers});
  }

  fetchAllValuesInDateRange(pickedStartDate: string, pickedEndDate: string, pickedDevice: string): Observable<object> {
    const headers = new HttpHeaders();
    headers.append('content', 'application/json');
    const params = new HttpParams().set('startDate', pickedStartDate).set('endDate', pickedEndDate).set('pickedDevice', pickedDevice);

    console.log(pickedStartDate + '  ' + pickedEndDate + '  ' + pickedDevice);
    return this.http.get('http://localhost:8080/getAllValuesInDateRange', {headers, params});
  }

  fetchAllPagedValues(pageNumber: number, pageSize: number): Observable<object> {
    const headers = new HttpHeaders();
    headers.append('content', 'application/json');
    const params = new HttpParams().set('pageNumber', pageNumber.toString()).set('pageSize', pageSize.toString());

    return this.http.get('http://localhost:8080/getValuesByPage', {headers, params});
  }

  fetchAvgValuesInDateRange(pickedStartDate: string, pickedEndDate: string, pickedDevice: string): Observable<object> {
    const headers = new HttpHeaders();
    headers.append('content', 'application/json');
    const params = new HttpParams().set('startDate', pickedStartDate).set('endDate', pickedEndDate).set('pickedDevice', pickedDevice);
    return this.http.get('http://localhost:8080/getAvgValuesInDataRange', {headers, params});
  }

  fetchMinValuesInDateRange(pickedStartDate: string, pickedEndDate: string, pickedDevice: string): Observable<object> {
    const headers = new HttpHeaders();
    headers.append('content', 'application/json');
    const params = new HttpParams().set('startDate', pickedStartDate).set('endDate', pickedEndDate).set('pickedDevice', pickedDevice);
    return this.http.get('http://localhost:8080/getMinValuesInDataRange', {headers, params});
  }

  fetchMaxValuesInDateRange(pickedStartDate: string, pickedEndDate: string, pickedDevice: string): Observable<object> {
    const headers = new HttpHeaders();
    headers.append('content', 'application/json');
    const params = new HttpParams().set('startDate', pickedStartDate).set('endDate', pickedEndDate).set('pickedDevice', pickedDevice);
    return this.http.get('http://localhost:8080/getMaxInDateRange', {headers, params});
  }

  removeAllData(): Observable<object> {
    const headers = new HttpHeaders();
    headers.append('content', 'application/json');
    return this.http.post('http://localhost:8080/removeAllData', {headers, responseType: 'text'});

  }
}

