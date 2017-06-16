import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ScoutType } from "../../enums/ScoutType";
import { ScoutList } from "../../interfaces/scoutList";
import { ScoutsService } from "../services/scouts.service";

@Component({
  selector: 'app-scout-list',
  templateUrl: './scout-list.component.html',
  styleUrls: ['./scout-list.component.css']
})
export class ScoutListComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scouts: ScoutsService
  ) { }

  list: ScoutList[];
  selectedType: string;
  count: number;

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        this.selectedType = ScoutType[+params['scoutType']];
        return this.scouts
          .LoadScouts(+params['scoutType'], false)
      })
      .subscribe(scoutList => {
        this.list = scoutList;
        this.count = this.list.length;
      });
  }

  gotoDetail(scout: ScoutList): void {
    this.router.navigate(['/detail', scout.scoutId]);
  }

  add(): void {
    this.router.navigate(['/detail']);
  }

}
