import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, merge, of } from 'rxjs';
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
  private tokenUrl =
    '/api/security/oauth/token?grant_type=client_credentials&client_id=K9FcE7rTjKaqju2XuWlLrzxXYspxv4s-A9hdogM0WDmcUVwsFo0wBA==&client_secret=Lnb4Nczh7cGDCx-MmiftR99nD8YZcpUeMLGlwmXgt0PW0P_jU7UJQhVRmghgP-Rk';
  private baseAddressUrl = '/api/places/geocode';
  private authResponse: AuthResponseType;

  constructor(private http: HttpClient) {
    this.generateToken();
  }

  getAddressesFromMap(address: string) {
    return this.http
      .get(`${this.baseAddressUrl}?address=${address}&itemCount=5`, {
        headers: {
          Authorization: `${this.authResponse.token_type} ${this.authResponse.access_token}`,
        },
      })
      .pipe(
        map((res: any) => {
          return <AddressResponse[]>res.copResults;
        })
      );
  }

  getAddressFromServer(address: string) {
    return this.http.get(`/api/address/search?address=${address}`).pipe(
      map((res: any) => {
        const list = <AddressResponse[]>res;
        return list;
      })
    );
  }

  private generateToken() {
    this.http.post(this.tokenUrl, {}).subscribe({
      next: (res) => {
        this.authResponse = <AuthResponseType>res;
      },
      error: (err) => {
        console.error(err);
        alert('Cant Get Token From Map My India');
      },
    });
  }
}
