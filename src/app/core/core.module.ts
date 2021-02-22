import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthActionService } from '../shared/services/auth-action.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, LandingComponent, FooterComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
  exports: [HeaderComponent, LandingComponent, FooterComponent],
})
export class CoreModule {}
