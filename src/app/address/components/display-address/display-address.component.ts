import { Component, Input, OnInit } from '@angular/core';
import { AddressResponse } from '../../models/address-response';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-display-address',
  templateUrl: './display-address.component.html',
  styleUrls: ['./display-address.component.css'],
})
export class DisplayAddressComponent implements OnInit {
  @Input('addresses')
  addresses: Array<AddressResponse>;
  constructor(private addressService: AddressService) {}

  ngOnInit(): void {}
}
