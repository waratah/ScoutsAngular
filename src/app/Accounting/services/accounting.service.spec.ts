import { TestBed, inject } from '@angular/core/testing';
import { Http } from "@angular/http";

import { MockHttpClient } from "app/mocks/MockHttp.service";
import { AccountingService } from './accounting.service';

describe('AccountingService', () => {
  let httpsvc = new MockHttpClient();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountingService,
        { provide: Http, useValue: httpsvc }
      ]
    });
  });

  it('should ...', inject([AccountingService], (service: AccountingService) => {
    expect(service).toBeTruthy();
  }));
});
