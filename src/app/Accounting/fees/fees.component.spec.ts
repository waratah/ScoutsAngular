import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FeesComponent } from './fees.component';
import { AccountingService } from "../services/accounting.service";
import { MockAccountingService } from "../mocks/MockAccountingService";

describe('FeesComponent', () => {
  let component: FeesComponent;
  let fixture: ComponentFixture<FeesComponent>;
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
      declarations: [FeesComponent],
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
    fixture = TestBed.createComponent(FeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('have fees', () => {
    expect(component.list.length).toBe(2);
  });

  it('Add fees on demand', () => {
    component.add();
    expect(component.list.length).toBe(3);
  });

  it('Fees are saved properly', () => {
    var finalLength = component.list.length + 1;
    component.add();
    component.submit();
    expect(feeSvc.fees.length).toBe(finalLength);
  });

});
