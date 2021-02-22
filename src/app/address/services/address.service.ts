import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressResponse } from '../models/address-response';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private addressPostUrl = '/api/address';
  private myAddressUrl = '/api/address/me';
  constructor(private http: HttpClient) {}

  saveAddress(address: AddressResponse) {
    return this.http.post(this.addressPostUrl, address);
  }

  getMyAddress() {
    return this.http.get(this.myAddressUrl);
  }
}
