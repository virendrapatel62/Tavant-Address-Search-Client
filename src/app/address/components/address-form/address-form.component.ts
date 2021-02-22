import { Component, OnInit } from '@angular/core';
import { AddressResponse } from '../../models/address-response';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
})
export class AddressFormComponent implements OnInit {
  private address: AddressResponse;
  constructor(private addressService: AddressService) {}

  ngOnInit(): void {}

  addressChanged(address: AddressResponse) {
    this.address = address;
    console.log({ selectedAddress: address });
  }

  saveAddress() {
    if (!this.address) {
      console.error('Select An Address First ');
      return;
    }

    this.addressService.saveAddress(this.address).subscribe({
      next: (address) => {
        console.log({
          'address Saved': address,
        });
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
