import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, LandingComponent, FooterComponent],
  imports: [CommonModule, CoreRoutingModule],
  exports: [HeaderComponent, LandingComponent, FooterComponent],
})
export class CoreModule {}
