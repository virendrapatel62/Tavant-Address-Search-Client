import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressSearchComponent } from './components/address-search/address-search.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MapService } from './services/map.service';

@NgModule({
  declarations: [AddressSearchComponent],
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
  providers: [MapService],
  exports: [AddressSearchComponent],
})
export class AddressModule {}
