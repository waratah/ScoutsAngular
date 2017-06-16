import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TransactionComponent } from './transaction.component';
import { AccountingService } from "../services/accounting.service";
import { MockAccountingService } from "../mocks/MockAccountingService";

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  let feeSvc = new MockAccountingService();
  feeSvc.fees = [{
    currentCost: 45,
    description: 'shirt',
    isActive: true,
  },
  {
    currentCost: 100,
    description: 'term fees',
    isActive: true,
  },]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionComponent],
      imports: [
        FormsModule
      ],
      providers: [
        { provide: AccountingService, useValue: feeSvc },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
