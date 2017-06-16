import { Component, OnInit } from '@angular/core';
import { Fee } from "app/interfaces/fee";
import { AccountingService } from "../services/accounting.service";

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {

  list: Fee[] = [];
  disableAdd: boolean = true;

  constructor(private service: AccountingService) { }

  ngOnInit() {
    this.service.Fees().subscribe(fees => {
      this.list = fees;
      this.disableAdd = false;
    });
  }

  public submit() {
    this.service.SaveFees(this.list);
  }

  public add() {
    this.list.push({ currentCost: 0, description: '', isActive: true });
  }
}
