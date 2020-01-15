import {Component, OnInit, ViewChild} from '@angular/core';
import {FetchService} from '../../../services/fetch.service';
import {DisplayConstants as DC_EXT} from '../../../constants/display-constants';
import {LineChartComponent} from '../date-picker/line-chart/line-chart.component';
import {BarChartComponent} from '../date-picker/bar-chart/bar-chart.component';
import {DeviceListComponent} from '../date-picker/device-list/device-list.component';


@Component({
  selector: 'app-data-paginate-list',
  templateUrl: './data-paginate-list.component.html',
  styleUrls: ['./data-paginate-list.component.scss']
})
export class DataPaginateListComponent implements OnInit {

  constructor(private fetchService: FetchService) {
  }

  private DC = DC_EXT;
  private data;
  private selectedSizePageValue: number;

  private isLoaded = true;

  @ViewChild(LineChartComponent, {static: true}) lineChartRef;
  @ViewChild(BarChartComponent, {static: true}) barChartRef;
  @ViewChild(DeviceListComponent, {static: true}) deviceListRef;

  settings = {
    editable: false,
    hideHeader: false,
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      stationName: {
        title: 'Station Name'
      },
      measurementDate: {
        title: 'Date and Time'
      },
      airTemperature: {
        title: 'Air Temp. [C]'
      },
      humidity: {
        title: 'Humidity [%]'
      },
      windSpeed: {
        title: 'Wind [m/s]'
      },
      barometricPressure: {
        title: 'Pressure [hPa]'
      },
      solarRadiation: {
        title: 'Solar [wats/m2]'
      },
      rainIntensity: {
        title: 'Rain [mm/h]'
      }
    }
  };

  fetchPageData() {
    this.isLoaded = true;
    this.fetchService.fetchAllPagedValues(0, this.selectedSizePageValue).subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.isLoaded = false;
    });
  }

  ngOnInit() {
    this.selectedSizePageValue = 100;
    this.fetchPageData();
  }

  onIntervalChange() {
    this.fetchPageData();
  }

  deleteAllData() {
    this.fetchService.removeAllData().subscribe(
      res => {
        console.log(res);
      }, error => {
        console.log(error);
      });
    this.data = null;
  }
}
