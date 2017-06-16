import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ScoutsService } from "../services/scouts.service";

import { ScoutType } from "../../enums/ScoutType";
import { ScoutEmail } from "app/interfaces/scoutEmail";

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  list: ScoutEmail[];
  text: string;
  selectedType: ScoutType;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private scouts: ScoutsService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.scouts.LoadEmails(+params['scoutType']))
      .subscribe(emails => {
        this.list = emails;
        this.text = emails.join(',');
      });
  }
  gotoDetail(scout: ScoutEmail): void {
    this.router.navigate(['/detail', scout.scoutId]);
  }

}
