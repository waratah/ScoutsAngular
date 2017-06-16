import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { EmailListComponent } from './email-list.component';
import { MockScoutsService } from "../mocks/MockScoutsService";
import { ScoutsService } from "../services/scouts.service";
import { Observable } from "rxjs/Observable";
import { ScoutEmail } from "app/interfaces/scoutEmail";

describe('EmailListComponent', () => {
  let scoutsvc = new MockScoutsService();
  scoutsvc.scoutEmail = [{
    scoutId: 1,
    email: '1@bc.com'
  },
  {
    scoutId: 2,
    email: '2@bc.com'
  }]

  let component: EmailListComponent;
  let fixture: ComponentFixture<EmailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailListComponent],
      providers: [
        { provide: ScoutsService, useValue: scoutsvc }
      ],
      imports: [RouterTestingModule.withRoutes([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
