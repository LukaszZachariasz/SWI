import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {ConfigConstants} from '../constants/config-constants';
import {retry} from 'rxjs/operators';

@Injectable()
export class WaterLevelControlService {

  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.myMethod$ = this.myMethodSubject.asObservable();
  }

  postWaterLevel(data) {

    console.log(
      ConfigConstants.SERVER_ADDRESS +
      ConfigConstants.DEVICES_URL +
      ConfigConstants.WATER_LEVEL_SET_URL + data.toString()
    );

    this.myMethodSubject.next(data);

    this.http.post(ConfigConstants.SERVER_ADDRESS + ConfigConstants.DEVICES_URL +
      ConfigConstants.WATER_LEVEL_SET_URL + data.toString(),
      {waterLevel: data.toString()}).pipe(retry(3));
  }
}

