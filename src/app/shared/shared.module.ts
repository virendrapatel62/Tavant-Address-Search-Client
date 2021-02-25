import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AlertService } from './services/alert.service';
import { AuthActionService } from './services/auth-action.service';
import { AlertComponent } from './components/alert/alert.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [AlertComponent],
  exports: [AlertComponent],
  imports: [CommonModule, SharedRoutingModule, MatSnackBarModule],
})
export class SharedModule {}
