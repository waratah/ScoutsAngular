import { Input, Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

import { Address } from '../../interfaces/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() address: Address;

  constructor() {
    this.address = {
      line1: '',
      line2: '',
      postcode: '',
      state: '',
      suburb: '',
    }
  }

  ngOnInit() {
  }

  submit() {
  }
}
