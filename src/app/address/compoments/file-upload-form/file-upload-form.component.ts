import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddressResponse } from '../../models/address-response';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-file-upload-form',
  templateUrl: './file-upload-form.component.html',
  styleUrls: ['./file-upload-form.component.css'],
})
export class FileUploadFormComponent implements OnInit {
  file: File;
  fileInput: HTMLInputElement;

  @Output('onSuccess')
  onSucces: EventEmitter<AddressResponse[]> = new EventEmitter();
  constructor(
    private addressService: AddressService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  selectFile(event: any) {
    console.log(event.target.files);
    this.file = event.target.files[0];
    console.log(this.file);
    this.fileInput = event;
  }

  uploadFile(form: HTMLFormElement) {
    this.addressService.upload(this.file).subscribe((event) => {
      if (event.type == HttpEventType.UploadProgress) {
        console.log(event.loaded, event.total);
      } else if (event instanceof HttpResponse) {
        console.log('Successs');
        console.log({ body: event.body });
        form.reset();
        this.onSucces.emit(event.body.validAddresses);
        const valid = event.body.validAddresses.length;
        const invalid = event.body.invalidAddresses.length;
        const message = `${valid} Address saved out of ${valid + invalid}`;
        this.alertService.showAlert({
          message: message,
          duration: 5000,
        });
      }
    });
  }
}
