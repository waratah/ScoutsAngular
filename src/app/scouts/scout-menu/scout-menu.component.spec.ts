import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ScoutMenuComponent } from './scout-menu.component';
import { ScoutService } from '../../services/scout.service';
import { EnumElement } from '../../interfaces/enumElement';

describe('ScoutMenuComponent', () => {
  var component: ScoutMenuComponent;
  var fixture: ComponentFixture<ScoutMenuComponent>;

  const scoutSvc: any = {
    get ScoutTypes() {
      console.log('message');
      const fees: EnumElement[] = [{
        value: 45,
        name: 'shirt',
      },
      {
        value: 100,
        name: 'term fees',
      }];
      return of(fees);
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoutMenuComponent ],
      providers: [
        { provide: ScoutService, useValue: scoutSvc }
      ],
      imports: [RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
