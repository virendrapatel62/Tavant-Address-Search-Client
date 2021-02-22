import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressSearchComponent } from './components/address-search/address-search.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MapService } from './services/map.service';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { AddressService } from './services/address.service';
import { TokenInterceptor } from '../core/interceptors/token.interceptor';

@NgModule({
  declarations: [AddressSearchComponent, AddressFormComponent],
  imports: [
    CommonModule,
    AddressRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [
    MapService,
    AddressService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  exports: [AddressSearchComponent, AddressFormComponent],
})
export class AddressModule {}
