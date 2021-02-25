import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EMPTY, fromEvent, Observable, of } from 'rxjs';
import {
  debounce,
  debounceTime,
  map,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import { AddressResponse } from '../../models/address-response';
import { MapService } from '../../services/map.service';

export interface User {
  name: string;
}

export class AddressSearchInputEvent {
  formControl: FormControl;
  address: AddressResponse;
}

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.css'],
})
export class AddressSearchComponent implements OnInit {
  message: string;

  @Output('onChange')
  onChange: EventEmitter<AddressSearchInputEvent> = new EventEmitter();

  constructor(private mapService: MapService, private http: HttpClient) {
    this.filteredOptions = new Observable();
  }

  myControl = new FormControl();
  filteredOptions: Observable<Array<any>>;
  _filteredOptions: Observable<Array<any>>;

  ngOnInit() {
    // temporary observale
    this._filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      tap((value) => value),
      switchMap((value) => {
        return this.filter(value);
      })
    );

    // subscribe to activate events
    // assigning values to new observale to change UI
    this._filteredOptions.subscribe((v) => {
      this.filteredOptions = of(v);
    });
  }

  displayFn(address: any): string {
    // console.log('display fn called ', address);
    return address && address.formattedAddress ? address.formattedAddress : '';
  }

  emitOnChangeEvent() {
    this.onChange.emit({
      address: this.myControl.value,
      formControl: this.myControl,
    });
  }

  private filter(value: string | null) {
    console.log('Filter');
    if (!value) {
      this.message = '';
      return EMPTY;
    }

    if (typeof value != 'string') {
      // console.log(this.myControl.value);
      this.emitOnChangeEvent();
      this.message = '';
      return this.filteredOptions;
    }

    console.log({ value }, '_filter');

    // getting from server if result are < 5 will send a request to map Search
    this.message = 'getting data from spring server';
    return this.mapService.getAddressFromServer(value).pipe(
      map((values) => {
        if (values.length < 5) {
          this.getFromMap(value, values);
          return values;
        }
        this.message = 'data came from spring server';
        return values;
      })
    );
    // return this.filteredOptions;
  }

  getFromMap(address: string, prev: Array<AddressResponse>) {
    this.message = 'getting data from Map server';
    this.mapService.getAddressesFromMap(address).subscribe((values) => {
      this.filteredOptions = of([...prev, ...values]);
      this.filteredOptions.subscribe((v) => {
        console.log(v);
        this.message = 'data came from map server';
      });
    });
  }

  submitForm() {
    // console.log('Submit Form');
    // console.log(this.myControl.value);
  }
}
