import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EMPTY, Observable } from 'rxjs';
import {
  debounce,
  debounceTime,
  map,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import { MapService } from '../../services/map.service';

export interface User {
  name: string;
}

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.css'],
})
export class AddressSearchComponent implements OnInit {
  constructor(private mapService: MapService) {
    this.filteredOptions = new Observable();
  }

  myControl = new FormControl();
  options: any[] = [1, 2, 4, 5];
  filteredOptions: Observable<Array<any>>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      tap((value) => value),
      map((value) => {
        return typeof value == 'string' ? value : null;
      }),
      switchMap((val) => {
        return this.filter(val);
      })
    );
  }

  displayFn(address: any): string {
    console.log('display fn called ', address);
    return address && address.formattedAddress ? address.formattedAddress : '';
  }

  private filter(value: string | null) {
    if (!value) {
      return EMPTY;
    }

    console.log({ value }, '_filter');

    return this.mapService.getAddresses(value).pipe(
      map((response) =>
        response.filter((option) => {
          console.log({ option });
          return option.formattedAddress;
        })
      )
    );
  }

  submitForm() {
    console.log('Submit Form');
    console.log(this.myControl.value);
  }
}
