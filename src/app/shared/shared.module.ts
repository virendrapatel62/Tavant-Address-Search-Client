import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AlertService } from './services/alert.service';
import { AuthActionService } from './services/auth-action.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedRoutingModule],
})
export class SharedModule {}
