import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ScoutListComponent } from './scout-list.component';
import { ScoutService } from '../../services/scout.service';

describe('ScoutListComponent', () => {
  let component: ScoutListComponent;
  let fixture: ComponentFixture<ScoutListComponent>;

  const scoutSvc: any = {
    LoadScouts: () => {
      const fees = [{
        memberNumber: 45,
        first: 'shirt',
        last: true,
      },
      {
        memberNumber: 100,
        first: 'term fees',
        last: true,
      }];
      return of(fees);
    },
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoutListComponent ],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [ { provide: ScoutService, useValue: scoutSvc }, ]
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
