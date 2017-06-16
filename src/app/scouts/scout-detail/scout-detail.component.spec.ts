import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from "rxjs/Observable";

import { ScoutSectionComponent } from '../scout-section/scout-section.component';
import { ScoutDetailComponent } from './scout-detail.component';
import { ScoutsService } from "../services/scouts.service";
import { ScoutDetail } from "app/interfaces/scoutDetail";
import { MockScoutsService } from "../mocks/MockScoutsService";
import { MockActivatedRoute } from "app/mocks/MockActivatedRoute";

describe('ScoutDetailComponent', () => {
  let scoutsvc = new MockScoutsService();
  scoutsvc.scoutDetail = {
    active: true, address: '', balance: 10, dOB: 'born',
    firstName: 'first', lastName: 'last', startDate: '2015-05-01',
    endDate: null, email: "test@test.com",
    medical: '', memberNumber: '', postcode: '2233',
    scoutId: 1, section: 3, state: 'NSW', suburb: 'Heathcote',
  };

  let activated = new MockActivatedRoute();
  activated.testParams = ['scoutId', 1]

  let component: ScoutDetailComponent;
  let fixture: ComponentFixture<ScoutDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScoutDetailComponent,
        ScoutSectionComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: ScoutsService, useValue: scoutsvc },
        { provide: ActivatedRoute, useValue: activated },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
