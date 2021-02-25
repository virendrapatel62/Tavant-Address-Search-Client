import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class AlertData {
  message: string;
  duration?: number = 5000;
  alertType?: string = 'success';
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private _alertObservable: BehaviorSubject<AlertData> = new BehaviorSubject({
    message: '',
  });
  constructor() {}

  public get alertObservable() {
    return this._alertObservable.asObservable();
  }

  showAlert(alertData: AlertData) {
    this._alertObservable.next(alertData);
  }
}
