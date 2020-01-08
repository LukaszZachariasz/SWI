import {AfterViewInit, Component} from '@angular/core';
import {DisplayConstants as DC_EXT} from '../../constants/display-constants';

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
