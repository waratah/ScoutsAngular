import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { FeesComponent } from './fees.component';
import { AccountingService } from '../../services/accounting.service';

describe('FeesComponent', () => {
  let component: FeesComponent;
  let fixture: ComponentFixture<FeesComponent>;

  const feeSvc: any = {
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
      declarations: [ FeesComponent ],
      imports: [ FormsModule ],
      providers: [ { provide: AccountingService, useValue: feeSvc }, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
