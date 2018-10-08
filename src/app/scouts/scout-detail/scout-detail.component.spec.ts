import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { ScoutDetailComponent } from './scout-detail.component';
import { ScoutService } from '../../services/scout.service';
import { ScoutType } from '../../enums/scoutType';

@Component({selector: 'app-scout-section', template: ''})
class ScoutSectionStubComponent {
  @Input() scoutType: ScoutType;;
}

describe('ScoutDetailComponent', () => {
  let component: ScoutDetailComponent;
  let fixture: ComponentFixture<ScoutDetailComponent>;

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
      declarations: [ ScoutDetailComponent, ScoutSectionStubComponent ],
      imports: [FormsModule, RouterTestingModule.withRoutes([])],
      providers: [ { provide: ScoutService, useValue: scoutSvc }, ]
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
