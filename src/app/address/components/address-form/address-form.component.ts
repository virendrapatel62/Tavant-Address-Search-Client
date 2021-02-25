import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddressResponse } from '../../models/address-response';
import { AddressService } from '../../services/address.service';
import {
  AddressSearchComponent,
  AddressSearchInputEvent,
} from '../address-search/address-search.component';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
})
export class AddressFormComponent implements OnInit {
  private childEvent: AddressSearchInputEvent;

  @Output('onAddressChange')
  private onAddressChange: EventEmitter<AddressResponse> = new EventEmitter();

  @ViewChild('searchComponent')
  searchBox: AddressSearchComponent;

  constructor(
    private addressService: AddressService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  addressChanged(event: AddressSearchInputEvent) {
    this.childEvent = event;
  }

  saveAddress() {
    if (!this.childEvent) {
      console.error('Select An Address First ');
      return;
    }

    this.addressService.saveAddress(this.childEvent.address).subscribe({
      next: (address) => {
        console.log({
          'address Saved': address,
        });
        this.childEvent.address = this.childEvent.address;
        this.childEvent.formControl.reset();
        this.onAddressChange.emit(address);
        this.alertService.showAlert({
          message: 'Address Saved..',
          duration: 5000,
        });
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
