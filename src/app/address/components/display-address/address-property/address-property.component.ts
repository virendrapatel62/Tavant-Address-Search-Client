import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-property',
  templateUrl: './address-property.component.html',
  styleUrls: ['./address-property.component.css'],
})
export class AddressPropertyComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  value: string;
  constructor() {}

  ngOnInit(): void {}
}
