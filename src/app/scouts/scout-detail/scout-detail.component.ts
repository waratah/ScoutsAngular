import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

import { ScoutsService } from "../services/scouts.service";
import { ScoutType } from "../../enums/ScoutType";
import { ScoutDetail } from "app/interfaces/scoutDetail";

@Component({
  selector: 'app-scout-detail',
  templateUrl: './scout-detail.component.html',
  styleUrls: ['./scout-detail.component.css']
})
export class ScoutDetailComponent implements OnInit {

  scout: ScoutDetail = <ScoutDetail>{};
  section: string = "...";

  constructor(private router: Router,
    private route: ActivatedRoute,
    private scouts: ScoutsService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.scouts.Load(+params['scoutId']))
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
