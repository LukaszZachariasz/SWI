import {Component, OnInit} from '@angular/core';
import {HistoricalFetchService} from '../../../services/historical-fetch.service';


@Component({
  selector: 'app-data-paginate-list',
  templateUrl: './data-paginate-list.component.html',
  styleUrls: ['./data-paginate-list.component.scss']
})
export class DataPaginateListComponent implements OnInit {

  constructor(private historicalDataService: HistoricalFetchService) {
  }

  data;

  // Model Fields
  //
  // private String measurementID;
  // private String stationName;
  // private Date measurementDate;
  // private Float airTemperature;
  // private Float wetBulbTemperature;
  // private Float humidity;
  // private Float rainIntensity;
  // private Float intervalRain;
  // private Float totalRain;
  // private Float precipitationType;
  // private Float windDirection;
  // private Float windSpeed;
  // private Float maximumWindSpeed;
  // private Float barometricPressure;
  // private Float solarRadiation;
  // private Integer heading;
  // private Float batteryLife;
  // private String measurementTimestampLabel;


  settings = {
    isPagerDisplay: false,
    columns: {
      stationName: {
        title: 'Station'
      },
      measurementDate: {
        title: 'Date'
      },
      airTemperature: {
        title: 'Air Temperature'
      },
      humidity: {
        title: 'Humidity'
      },
      windSpeed: {
        title: 'Wind Speed'
      },
      barometricPressure: {
        title: 'Pressure'
      },
      solarRadiation: {
        title: 'Solar Radiation'
      },
      rainIntensity: {
        title: 'Rain Intensity'
      }
    }
  };

  fetchPageData() {
    this.historicalDataService.fetchPageDataFromService(0, 5000).subscribe(res => this.data = res);
    console.log(this.data);
  }

  ngOnInit() {
  }

}
