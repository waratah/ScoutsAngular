import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountingRoutingModule } from './accounting-routing.module';
import { FeesComponent } from './fees/fees.component';
import { TransactionComponent } from './transaction/transaction.component';

import { AccountingService } from "./services/accounting.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountingRoutingModule
  ],

  providers: [
    AccountingService,
  ],
  declarations: [
    FeesComponent,
    TransactionComponent,
  ]
})
export class AccountingModule { }
