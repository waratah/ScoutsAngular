import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ScoutEmail } from '../../interfaces/scoutEmail';
import { ScoutType } from '../../enums/scoutType';
import { ScoutService } from '../../services/scout.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {

  list: ScoutEmail[];
  text: string;
  selectedType: ScoutType;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private scouts: ScoutService
  ) { }

  ngOnInit() {
    this.route.params
    .pipe(
      switchMap((params: Params) => this.scouts.LoadEmails(+params['scoutType'])))
      .subscribe(emails => {
        this.list = emails;
        this.text = emails.join(',');
      });
  }

  gotoDetail(scout: ScoutEmail): void {
    this.router.navigate(['/detail', scout.scoutId]);
  }
}
