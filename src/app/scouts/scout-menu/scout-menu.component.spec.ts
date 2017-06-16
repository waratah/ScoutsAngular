import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { RouterTestingModule } from '@angular/router/testing';

import { ScoutMenuComponent } from './scout-menu.component';
import { MockScoutsService } from "app/scouts/mocks/MockScoutsService";
import { ScoutsService } from "app/scouts/services/scouts.service";
import { DebugElement } from "@angular/core";
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ScoutType } from "app/enums/ScoutType";
import { EnumElement } from "app/interfaces/enumelement";

describe('ScoutMenuComponent', () => {
  let component: ScoutMenuComponent;
  let fixture: ComponentFixture<ScoutMenuComponent>;

  let scoutsvc = new MockScoutsService();
  scoutsvc.ScoutTypes = Observable.of([{ value: 1, name: "S1" }, { value: 2, name: "S2" }]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScoutMenuComponent],
      providers: [
        { provide: ScoutsService, useValue: scoutsvc },
      ],
      imports: [RouterTestingModule.withRoutes([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Get scout types', () => {
    component.scoutTypes.subscribe(array => {
      expect(array.length).toEqual(2);
    });
  });

});
