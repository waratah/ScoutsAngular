import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ScoutSectionComponent } from './scout-section.component';
import { ScoutService } from '../../services/scout.service';

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


describe('ScoutSectionComponent', () => {
  let component: ScoutSectionComponent;
  let fixture: ComponentFixture<ScoutSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoutSectionComponent,],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [ { provide: ScoutService, useValue: scoutSvc }, ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
