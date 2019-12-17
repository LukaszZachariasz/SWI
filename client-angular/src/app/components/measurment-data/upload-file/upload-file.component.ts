import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MeasurementDataComponent} from '../measurment-data.component';
import {FileUploadService} from '../../../services/file-upload.service';
import {HttpEvent, HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  form: FormGroup;
  progress = 0;
  dataAreLoaded = false;
  @ViewChild(MeasurementDataComponent, {static: false}) measurementDataComponent: MeasurementDataComponent;

  constructor(public fb: FormBuilder, public fileUploadService: FileUploadService) {

    this.form = this.fb.group({
      name: [''],
      avatar: [null]
    });
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity();
  }

  submitUser() {
    this.fileUploadService.addUser(
      this.form.value.name,
      this.form.value.avatar
    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          break;
        case HttpEventType.ResponseHeader:
          break;
        case HttpEventType.UploadProgress:
          this.progress = Math.round(event.loaded / event.total * 100);
          break;
        case HttpEventType.Response:
          this.dataAreLoaded = true;
          setTimeout(() => {
            this.progress = 0;
          }, 100);

      }
    });
  }

  ngOnInit(): void {
  }

}
