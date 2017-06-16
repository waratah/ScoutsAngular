import { Component, OnInit } from '@angular/core';

import { Transaction } from "app/interfaces/transaction";
import { AccountingService } from "../services/accounting.service";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  list: Transaction[] = [];

  disableAdd = false;

  constructor(private service: AccountingService) { }

  ngOnInit() {
  }

  add() {
  }

  submit() {
  }

}
