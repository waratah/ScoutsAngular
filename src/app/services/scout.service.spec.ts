import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { ScoutService } from './scout.service';

describe('ScoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ ScoutService]

  }));

  it('should be created', inject( [HttpTestingController, ScoutService],
    (httpMock: HttpTestingController, accountsService: ScoutService ) =>{
   const service: ScoutService = TestBed.get(ScoutService);
   expect(service).toBeTruthy();
  }));
});
