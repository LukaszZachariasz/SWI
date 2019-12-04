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
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.progress = Math.round(event.loaded / event.total * 100);
          console.log(`Uploaded! ${this.progress}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          setTimeout(() => {
            this.progress = 0;
          }, 1500);

      }
    });
  }

  ngOnInit(): void {
  }

}
