import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ScoutDetail } from '../../interfaces/scoutDetail';
import { ScoutType } from '../../enums/scoutType';
import { ScoutService } from '../../services/scout.service';

@Component({
  selector: 'app-scout-detail',
  templateUrl: './scout-detail.component.html',
  styleUrls: ['./scout-detail.component.scss']
})
export class ScoutDetailComponent implements OnInit {

  scout: ScoutDetail = <ScoutDetail>{};
  section: string = '...';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private scouts: ScoutService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => this.scouts.Load(+params['scoutId'])))
      .subscribe(x => {
        this.scout = x;
        this.section = ScoutType[x.section];
      });
  }

  submit() {
    this.scouts.Save(this.scout)
      .subscribe(x => {
      });
  }
}
