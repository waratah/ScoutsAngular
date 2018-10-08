import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor() { }

  address = {
      line1: '',
      line2: '',
      postcode: '',
      state: '',
      suburb: '',
    };

  ngOnInit() {
  }

  submit() {
  }

}
