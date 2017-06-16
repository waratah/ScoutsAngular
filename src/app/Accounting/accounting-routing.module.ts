import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeesComponent } from "app/Accounting/fees/fees.component";
import { TransactionComponent } from "app/Accounting/transaction/transaction.component";

const routes: Routes = [{
  path: 'fees',
  component: FeesComponent
},
{
  path: 'transaction',
  component: TransactionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
