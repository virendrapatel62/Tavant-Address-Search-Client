import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private authActionService: AuthActionService
  ) {
    this.user.email = 'patelvirendra62@gmail.com';
    this.user.name = 'Virendra Kumar Patel';
    this.user.password = '1234567890';
    this.user.password2 = '1234567890';
  }
  ngOnInit(): void {}

  register() {
    this.authService.registerUser(this.user).subscribe({
      next: (response) => {
        console.log(response);
        this.tokenService.saveTokenToLocalStorage(response.token);
        this.router.navigate(['/']);
        this.authActionService.emitAction({ action: AuthActionType.LOGIN });
      },
      error: (errorResponse) => {
        console.log(errorResponse);
      },
    });
  }
}
