import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';
import { RouterTestingModule } from '@angular/router/testing';

import { ScoutListComponent } from './scout-list.component';
import { ScoutsService } from "../services/scouts.service";
import { ScoutList } from "app/interfaces/scoutList";

import { MockScoutsService } from "../mocks/MockScoutsService";

describe('ScoutListComponent', () => {
  let scoutsvc = new MockScoutsService();
  scoutsvc.scoutList = [{
    scoutId: 1,
    first: 'f1',
    last: 'l1',
    memberNumber: '1234',
    section: 3,
  }];

  let component: ScoutListComponent;
  let fixture: ComponentFixture<ScoutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScoutListComponent],
      providers: [
        //{ provide: Router, useValue: router },
        //{ provide: ActivatedRoute, useValue: router },
        { provide: ScoutsService, useValue: scoutsvc },
      ],
      imports: [RouterTestingModule.withRoutes([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
