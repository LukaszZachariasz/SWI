import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {LineChartComponent} from './line-chart/line-chart.component';
import {FetchService} from '../../../services/fetch.service';
import {DisplayConstants as DC_EXT} from '../../../constants/display-constants';
import {ConfigConstants as CC_EXT} from '../../../constants/config-constants';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {DeviceListComponent} from './device-list/device-list.component';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})

export class DatePickerComponent implements OnInit {

  private DC = DC_EXT;

  public allValuesDataJson;
  public avgValuesDataJson;
  public minValuesDataJson;
  public maxValuesDataJson;

  public allValuesInDateRangeSet = [];
  public avgValuesInDateRangeSet = [];
  public minValuesInDateRangeSet = [];
  public maxValuesInDateRangeSet = [];

  private maxDate = new Date();
  private isEndDatePickerDisabled = true;

  @Input() pickedStartDate;
  @Input() pickedEndDate;

  @ViewChild(LineChartComponent, {static: false}) lineChartRef;
  @ViewChild(BarChartComponent, {static: false}) barChartRef;
  @ViewChild(DeviceListComponent, {static: false}) deviceListRef;
  private pickedDevice: any;
  isLoaded: boolean = true;

  constructor(private fetchService: FetchService) {
    this.lineChartRef = new LineChartComponent();
    this.barChartRef = new BarChartComponent();
    this.deviceListRef = new DeviceListComponent(fetchService);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.setLastDayRange();
    }, 3000);
  }

  fetchData() {
    this.allValuesDataJson = this.fetchService.fetchAllValuesInDateRange
    (this.pickedStartDate.toLocaleDateString(CC_EXT.LOCALE_DATE_FORMAT),
      this.pickedEndDate.toLocaleDateString(CC_EXT.LOCALE_DATE_FORMAT),
      this.pickedDevice)
      .subscribe(res => {
        this.allValuesInDateRangeSet = res as [];
        console.log(res);
      });

    this.avgValuesDataJson = this.fetchService.fetchAvgValuesInDateRange
    (this.pickedStartDate.toLocaleDateString(CC_EXT.LOCALE_DATE_FORMAT),
      this.pickedEndDate.toLocaleDateString(CC_EXT.LOCALE_DATE_FORMAT),
      this.pickedDevice)
      .subscribe(res => {
        this.avgValuesInDateRangeSet = res as [];
      });

    this.minValuesDataJson = this.fetchService.fetchMinValuesInDateRange
    (this.pickedStartDate.toLocaleDateString(CC_EXT.LOCALE_DATE_FORMAT),
      this.pickedEndDate.toLocaleDateString(CC_EXT.LOCALE_DATE_FORMAT),
      this.pickedDevice)
      .subscribe(res => {
        this.minValuesInDateRangeSet = res as [];
        console.log(res);
      });

    this.maxValuesDataJson = this.fetchService.fetchMaxValuesInDateRange
    (this.pickedStartDate.toLocaleDateString(CC_EXT.LOCALE_DATE_FORMAT),
      this.pickedEndDate.toLocaleDateString(CC_EXT.LOCALE_DATE_FORMAT),
      this.pickedDevice)
      .subscribe(res => {
        this.maxValuesInDateRangeSet = res as [];
        console.log(res);
      });


    this.isLoaded = true;

    setTimeout(() => {
      this.isLoaded = false;
    }, 2000);

    setTimeout(() => {
      if (typeof (this.lineChartRef) != 'undefined') {
        this.lineChartRef.chartRefresh();
      }
      if (typeof (this.barChartRef) != 'undefined') {
        this.barChartRef.dataRefresh();
      }

    }, 2000);

  }

  onDateChange() {
    this.activateEndDatePickerWhenStartDateInserted();
    if (this.isSelectedDateValid()) {
      this.fetchData();
    }
  }

  private activateEndDatePickerWhenStartDateInserted() {
    this.pickedStartDate ? this.isEndDatePickerDisabled = false : this.isEndDatePickerDisabled = true;
  }

  private isSelectedDateValid() {
    return (this.pickedStartDate && this.pickedEndDate &&
      (this.pickedStartDate <= this.pickedEndDate) &&
      this.pickedStartDate < Date.now() &&
      this.pickedEndDate < Date.now());
  }

  setLastDayRange() {
    this.pickedEndDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours());
    this.pickedStartDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1, new Date().getHours());
    this.fetchData();
  }

  setLastWeekRange() {
    this.pickedEndDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 1);
    this.pickedStartDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 7, 1);
    this.fetchData();
  }

  setLastMonthRange() {
    this.pickedEndDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    this.pickedStartDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
    this.fetchData();
  }

  setLast6Months() {
    this.pickedEndDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    this.pickedStartDate = new Date(new Date().getFullYear(), new Date().getMonth() - 6, 1);
    this.fetchData();
  }

  pickedDeviceEvent($event) {
    this.pickedDevice = $event;
    this.fetchData();
  }

}
