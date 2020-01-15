import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DisplayConstants as DC_EXT} from '../../constants/display-constants';
import {DatePickerComponent} from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'app-measurment-data',
  templateUrl: './measurment-data.component.html',
  styleUrls: ['./measurment-data.component.scss']
})
export class MeasurementDataComponent implements AfterViewInit {

  private DC = DC_EXT;

  constructor() {
  }

  ngAfterViewInit(): void {
  }

}
