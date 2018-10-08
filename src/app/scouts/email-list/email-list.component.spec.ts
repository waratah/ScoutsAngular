import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { EmailListComponent } from './email-list.component';
import { ScoutService } from '../../services/scout.service';

describe('EmailListComponent', () => {
  let component: EmailListComponent;
  let fixture: ComponentFixture<EmailListComponent>;

  const scoutSvc: any = {
    Fees: () => {
      const fees = [{
        currentCost: 45,
        description: 'shirt',
        isActive: true,
      },
      {
        currentCost: 100,
        description: 'term fees',
        isActive: true,
      }];
      return of(fees);
    },
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailListComponent ],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [ { provide: ScoutService, useValue: scoutSvc }, ]
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
