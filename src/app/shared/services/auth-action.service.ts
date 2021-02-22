import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from 'src/app/auth/services/token.service';

export class AuthActionType {
  static LOGIN = 'LOGIN';
  static REGISTER = 'REGISTER';
  static LOGOUT = 'LOGOUT';
}

@Injectable({
  providedIn: 'root',
})
export class AuthActionService {
  private static _authActionObservable: BehaviorSubject<{ action: string }>;

  constructor(private tokenService: TokenService) {
    if (tokenService.getToken()) {
      AuthActionService._authActionObservable = new BehaviorSubject({
        action: AuthActionType.LOGIN,
      });
    } else {
      AuthActionService._authActionObservable = new BehaviorSubject({
        action: AuthActionType.LOGOUT,
      });
    }
  }

  public get authActionObservable() {
    return AuthActionService._authActionObservable.asObservable();
  }

  public emitAction(action: { action: string }) {
    console.log('Event Emitted', action);
    AuthActionService._authActionObservable.next({ ...action });
  }
}
