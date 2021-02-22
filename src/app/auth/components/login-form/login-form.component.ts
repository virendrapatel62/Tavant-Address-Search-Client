import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private authActionService: AuthActionService
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
      },
      error: (errorResponse) => {
        console.log(errorResponse);
      },
    });
  }
}
