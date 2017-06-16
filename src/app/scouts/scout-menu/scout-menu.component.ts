import { Component, OnInit } from '@angular/core';

import { ScoutsService } from '../services/scouts.service';
import { EnumElement } from 'app/interfaces/enumelement';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-scout-menu',
  templateUrl: './scout-menu.component.html',
  styleUrls: ['./scout-menu.component.css']
})
export class ScoutMenuComponent implements OnInit {
  constructor(private scouts: ScoutsService) { }

  scoutTypes: Observable<EnumElement[]>;

  ngOnInit() {
    this.scoutTypes = this.scouts.ScoutTypes;
  };
}