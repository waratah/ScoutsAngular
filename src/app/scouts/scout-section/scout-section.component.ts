import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { ScoutsService } from "../services/scouts.service";
import { EnumElement } from "app/interfaces/enumelement";
import { ScoutType } from "app/enums/ScoutType";

@Component({
  selector: 'app-scout-section',
  templateUrl: './scout-section.component.html',
  styleUrls: ['./scout-section.component.css']
})
export class ScoutSectionComponent implements OnInit {

  constructor(private scouts: ScoutsService) { }

  list: Observable<EnumElement[]>;

  @Input() @Output() scoutType: ScoutType;

  ngOnInit() {
    this.list = this.scouts.ScoutTypes;
  }
}