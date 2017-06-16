import { TestBed, inject } from '@angular/core/testing';
import { Http } from "@angular/http";

import { MockHttpClient } from "app/mocks/MockHttp.service";
import { ScoutsService } from "../services/scouts.service";


describe('ScoutsService', () => {
  let httpsvc = new MockHttpClient();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoutsService,
        { provide: Http, useValue: httpsvc }
      ]
    });
  });

  it('should ...', inject([ScoutsService], (service: ScoutsService) => {
    expect(service).toBeTruthy();
  }));
});
