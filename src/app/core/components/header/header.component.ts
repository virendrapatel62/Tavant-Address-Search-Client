import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/auth/services/token.service';
import {
  AuthActionService,
  AuthActionType,
} from 'src/app/shared/services/auth-action.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  appname = 'Address App';
  constructor(
    private authActionService: AuthActionService,
    private tokenService: TokenService
  ) {
    console.log(this.authActionService.authActionObservable);
  }

  ngOnInit(): void {
    this.authActionService.authActionObservable.subscribe({
      next: (value) => {
        this.isLoggedIn = value.action == AuthActionType.LOGIN;
        console.log(this.isLoggedIn);
      },
    });
  }

  logout() {
    this.tokenService.clearToken();
    this.authActionService.emitAction({ action: AuthActionType.LOGOUT });
  }
}
