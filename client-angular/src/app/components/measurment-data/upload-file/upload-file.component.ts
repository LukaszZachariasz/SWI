import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
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
  filePicked = false;

  constructor(public fb: FormBuilder, public fileUploadService: FileUploadService) {
    this.filePicked = false;
    this.form = this.fb.group({
      name: [''],
      fileUploaded: [null]
    });
  }

  uploadFile(event) {
    this.filePicked = true;
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      fileUploaded: file
    });
    this.form.get('fileUploaded').updateValueAndValidity();
  }

  submitData() {
    this.filePicked = false;
    this.fileUploadService.addData(
      this.form.value.fileUploaded
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
          this.setOnDataLoaded();
          this.filePicked = true;
          setTimeout(() => {
            this.progress = 0;
          }, 100);

      }
    });
  }

  ngOnInit(): void {
  }

  private setOnDataLoaded() {
    this.dataAreLoaded = true;
    setTimeout(() => {
      this.dataAreLoaded = false;
    }, 3000);
  }
}
