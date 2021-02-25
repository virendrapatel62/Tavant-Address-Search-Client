import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import {
  AuthActionService,
  AuthActionType,
} from 'src/app/shared/services/auth-action.service';
import { LoginFormdata } from '../../models/login-formdata';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  user: LoginFormdata = new LoginFormdata();

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private authActionService: AuthActionService,
    private alertService: AlertService
  ) {
    this.user.email = 'patelvirendra62@gmail.com';
    this.user.password = '1234567890';

    console.log(this.authActionService.authActionObservable);
  }
  ngOnInit(): void {}

  loginUser() {
    this.authService.loginUser(this.user).subscribe({
      next: (response) => {
        console.log(response);
        this.tokenService.saveTokenToLocalStorage(response.token);
        this.authActionService.emitAction({ action: AuthActionType.LOGIN });
        this.router.navigate(['/']);
        this.alertService.showAlert({
          message: 'Login Success',
          duration: 5000,
          alertType: 'success',
        });
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
        this.alertService.showAlert({
          message: errorResponse.error.error,
          duration: 5000,
          alertType: 'danger',
        });
      },
    });
  }
}
