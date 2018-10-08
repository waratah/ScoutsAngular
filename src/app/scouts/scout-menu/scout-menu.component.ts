import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ScoutService } from '../../services/scout.service';
import { EnumElement } from '../../interfaces/enumElement';

@Component({
  selector: 'app-scout-menu',
  templateUrl: './scout-menu.component.html',
  styleUrls: ['./scout-menu.component.scss']
})
export class ScoutMenuComponent implements OnInit {

  constructor(private scouts: ScoutService) { }

  scoutTypes: Observable<EnumElement[]>;

  ngOnInit() {
    this.scoutTypes = this.scouts.ScoutTypes;
  }
}
