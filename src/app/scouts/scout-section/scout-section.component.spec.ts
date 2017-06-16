import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoutSectionComponent } from './scout-section.component';
import { MockScoutsService } from "../mocks/MockScoutsService";
import { ScoutsService } from "../services/scouts.service";

describe('ScoutSectionComponent', () => {
  let component: ScoutSectionComponent;
  let fixture: ComponentFixture<ScoutSectionComponent>;
  let scoutsvc = new MockScoutsService();


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScoutSectionComponent],
      providers: [
        { provide: ScoutsService, useValue: scoutsvc },
      ]
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
