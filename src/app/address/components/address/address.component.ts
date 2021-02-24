import { Component, OnInit } from '@angular/core';
import { AddressResponse } from '../../models/address-response';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  addresses: Array<AddressResponse> = [];
  constructor(private addressService: AddressService) {}

  ngOnInit(): void {
    this.getAddress();
  }

  onAddressChange(address: AddressResponse) {
    this.addresses.push(address);
  }

  getAddress() {
    this.addressService.getMyAddress().subscribe({
      next: (addresses) => {
        this.addresses = addresses;
      },
      error: (err) => {},
    });
  }

  fileDataSaved(addresses: Array<AddressResponse>) {
    const temp = [...this.addresses, ...addresses];
    this.addresses = [...temp];
  }
}
