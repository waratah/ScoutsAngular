import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AccountingRoutingModule } from './accounting-routing.module';

import { FeesComponent } from './fees/fees.component';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    AccountingRoutingModule,
  ],
  declarations: [FeesComponent, TransactionComponent]
})
export class AccountingModule { }
