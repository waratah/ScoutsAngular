import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address/address.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AddressRoutingModule,
  ],
  declarations: [AddressComponent]
})
export class AddressModule { }
