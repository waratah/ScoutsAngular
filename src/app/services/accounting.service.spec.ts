import { TestBed, inject } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { AccountingService } from './accounting.service';

describe('AccountingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ AccountingService]
  }));

  it('should be created', inject( [HttpTestingController, AccountingService],
     (httpMock: HttpTestingController, accountsService: AccountingService ) =>{
    const service: AccountingService = TestBed.get(AccountingService);
    expect(service).toBeTruthy();
  }));
});
