import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AppComponent} from './app.component';
import {MeasurementDataComponent} from './components/measurment-data/measurment-data.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TitleComponent} from './components/title/title.component';
import {LineChartComponent} from './components/measurment-data/date-picker/line-chart/line-chart.component';
import {BarChartComponent} from './components/measurment-data/bar-chart/bar-chart.component';
import {HttpClientModule} from '@angular/common/http';
import {DatePickerModule} from '@syncfusion/ej2-angular-calendars';
import {DatePickerComponent} from './components/measurment-data/date-picker/date-picker.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ControlPanelComponent} from './components/measurment-data/control-panel/control-panel.component';
import {HistoricalFetchService} from './services/historical-fetch.service';
import {WaterLevelControlService} from './services/water-level-control.service';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {AccordionModule} from 'primeng/accordion';
import {CalendarModule} from 'primeng/primeng';
import {WebsocketService} from './services/websocket.service';
import {DeviceListComponent} from './components/device-list/device-list.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {
  MatButtonToggleModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSliderModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {UploadFileComponent} from './components/measurment-data/upload-file/upload-file.component';
import {DataPaginateListComponent} from './components/measurment-data/data-paginate-list/data-paginate-list.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementDataComponent,
    NavbarComponent,
    TitleComponent,
    LineChartComponent,
    BarChartComponent,
    DatePickerComponent,
    ControlPanelComponent,
    DeviceListComponent,
    UploadFileComponent,
    DataPaginateListComponent
  ],
  imports: [
    Ng2SmartTableModule,
    DatePickerModule,
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatExpansionModule,
    AccordionModule,
    CalendarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    HistoricalFetchService,
    WaterLevelControlService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
