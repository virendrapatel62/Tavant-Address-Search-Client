import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressPropertyComponent } from './address-property.component';

describe('AddressPropertyComponent', () => {
  let component: AddressPropertyComponent;
  let fixture: ComponentFixture<AddressPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
