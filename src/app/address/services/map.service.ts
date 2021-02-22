import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { map, repeat } from 'rxjs/operators';
import { AddressResponse } from '../models/address-response';

interface AuthResponseType {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  project_code: string;
  client_id: string;
}

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private addressUrl = 'http://localhost:8080/api/map/addresses';

  constructor(private http: HttpClient) {}

  getAddresses(address: string) {
    let temp = this.addressUrl;
    temp = `${temp}?address=${address}&itemCount=10`;

    return this.http.get(temp).pipe(
      map((values) => {
        const result = <{ copResults: [AddressResponse] }>values;
        return result.copResults;
      })
    );
  }
}
