import { Component, OnInit } from '@angular/core';


import { Transaction } from 'src/app/interfaces/transaction';
import { AccountingService } from 'src/app/services/accounting.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor() { }

  list: Transaction[] = [];

  disableAdd = false;

  ngOnInit() {
  }

  add() {
  }

  submit() {
  }
}
