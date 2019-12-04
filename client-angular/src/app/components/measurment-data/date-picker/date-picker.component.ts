import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {LineChartComponent} from './line-chart/line-chart.component';
import {HistoricalFetchService} from '../../../services/historical-fetch.service';
import {DisplayConstants as DC_EXT} from '../../../constants/display-constants';
import {ConfigConstants as CC_EXT} from '../../../constants/config-constants';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})

export class DatePickerComponent implements OnInit {

  private DC = DC_EXT;
  public historicalDataJson;

  maxDate = new Date();
  historicalDataInDatePicker;
  selectedIntervalValue: number;
  isEndDatePickerDisabled = true;

  @Input() pickedStartDate;
  @Input() pickedEndDate;
  @ViewChild(LineChartComponent, {static: false}) lineChartRef;

  constructor(private liveFetchService: HistoricalFetchService) {
    this.selectedIntervalValue = DC_EXT.TIME_INTERVAL_SET[2].minutes;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.setLastDayRange();
    }, 1000);
  }

  fetchData() {
    this.historicalDataJson = this.liveFetchService.fetchHistoricalDataFromService
    (this.pickedStartDate.toLocaleDateString(CC_EXT.LOCALE_DATE_FORMAT),
      this.pickedEndDate.toLocaleDateString(CC_EXT.LOCALE_DATE_FORMAT),
      this.selectedIntervalValue)
      .subscribe(res => {
        this.historicalDataInDatePicker = res,
          console.log(res);
      });
    this.lineChartRef.chartRefresh();
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

  onIntervalChange() {
    this.fetchData();
  }
}
