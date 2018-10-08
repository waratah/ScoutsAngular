import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeesComponent } from './fees/fees.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: 'fees', component: FeesComponent },
  { path: 'transaction', component: TransactionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
