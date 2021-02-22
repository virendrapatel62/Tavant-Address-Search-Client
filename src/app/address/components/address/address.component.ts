import { Component, OnInit } from '@angular/core';
import { AddressResponse } from '../../models/address-response';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  address: AddressResponse;
  constructor(private addressService: AddressService) {}

  ngOnInit(): void {
    this.getAddress();
  }

  onAddressChange(address: AddressResponse) {
    this.address = address;
  }

  getAddress() {
    this.addressService.getMyAddress().subscribe({
      next: (address) => {
        this.address = address;
      },
      error: (err) => {},
    });
  }
}
