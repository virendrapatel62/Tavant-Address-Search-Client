import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoginFormdata } from '../models/login-formdata';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUserUrl = '/api/auth/register';
  private loginUrl = '/api/auth/login';

  constructor(private http: HttpClient) {}

  registerUser(user: User) {
    return this.http.post(this.registerUserUrl, user).pipe(
      map((resp) => {
        return <{ token: string }>resp;
      })
    );
  }

  loginUser(data: LoginFormdata) {
    return this.http.post(this.loginUrl, data).pipe(
      map((resp) => {
        return <{ token: string }>resp;
      })
    );
  }
}
