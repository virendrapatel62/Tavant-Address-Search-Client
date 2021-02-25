import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import {
  AuthActionService,
  AuthActionType,
} from 'src/app/shared/services/auth-action.service';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  user: User = new User();

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private authActionService: AuthActionService,
    private alertService: AlertService
  ) {
    this.user.email = 'patelvirendra62@gmail.com';
    this.user.name = 'Virendra Kumar Patel';
    this.user.password = '1234567890';
    this.user.password2 = '1234567890';
  }
  ngOnInit(): void {
    console.log(this.alertService);
  }

  register() {
    if (this.user.password != this.user.password2) {
      this.alertService.showAlert({
        message: 'Password not matched !',
        duration: 5000,
        alertType: 'danger',
      });
      return;
    }

    this.authService.registerUser(this.user).subscribe({
      next: (response) => {
        console.log(response);
        this.tokenService.saveTokenToLocalStorage(response.token);
        this.router.navigate(['/']);
        this.authActionService.emitAction({ action: AuthActionType.LOGIN });
      },
      error: (errorResponse) => {
        console.log(errorResponse);
        this.alertService.showAlert({
          message: errorResponse.error[0].defaultMessage,
          duration: 5000,
          alertType: 'danger',
        });
      },
    });
  }
}
