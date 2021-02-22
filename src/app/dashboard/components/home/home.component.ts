import { Component, OnInit } from '@angular/core';
import { AddressResponse } from 'src/app/address/models/address-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  addressChanged(address: AddressResponse) {
    console.log(address);
  }
}
