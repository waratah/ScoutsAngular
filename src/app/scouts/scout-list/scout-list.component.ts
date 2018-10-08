import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ScoutService } from '../../services/scout.service';
import { ScoutList } from '../../interfaces/scoutList';
import { ScoutType } from '../../enums/scoutType';

@Component({
  selector: 'app-scout-list',
  templateUrl: './scout-list.component.html',
  styleUrls: ['./scout-list.component.scss']
})
export class ScoutListComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scouts: ScoutService
  ) { }

  list: ScoutList[];
  selectedType: string;
  count: number;

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => {
        this.selectedType = ScoutType[+params['scoutType']];
        return this.scouts
          .LoadScouts(+params['scoutType'], false)
      }))
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
