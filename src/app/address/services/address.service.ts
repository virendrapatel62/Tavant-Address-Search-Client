import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddressResponse } from '../models/address-response';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private addressPostUrl = '/api/address';
  private myAddressUrl = '/api/address/me';
  private uploadfileUrl = '/api/address/file';
  constructor(private http: HttpClient) {}

  saveAddress(address: AddressResponse) {
    return this.http.post(this.addressPostUrl, address);
  }

  getMyAddress() {
    return this.http
      .get(this.myAddressUrl)
      .pipe(map((res) => <[AddressResponse]>res));
  }

  // upload address csv
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file, file.name);

    const req = new HttpRequest('POST', this.uploadfileUrl, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req);
  }
}
