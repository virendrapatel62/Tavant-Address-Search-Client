import { Template } from '@angular/compiler/src/render3/r3_ast';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginFormComponent } from 'src/app/auth/components/login-form/login-form.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  constructor(
    private message: MatSnackBar,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.alertService.alertObservable.subscribe((value) => {
      if (value.message) {
        this.message.open(value.message, undefined, {
          duration: value.duration,
          panelClass: ['text-white', 'bg-' + value.alertType],
        });
      }
    });
  }
}
