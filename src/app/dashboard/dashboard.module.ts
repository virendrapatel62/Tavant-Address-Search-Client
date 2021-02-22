import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AddressModule } from '../address/address.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, DashboardRoutingModule, AddressModule],
})
export class DashboardModule {}
