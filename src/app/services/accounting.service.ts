import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { environment } from 'src/environments/environment';

import { Fee } from '../interfaces/fee';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {

  constructor( private http: HttpClient,
     ) { }

  public Fees(): Observable<Fee[]> {
    return this.http
      .get<Fee[]>(environment.api + 'fees');
  }

  public SaveFees(fees: Fee[]) {
    return this.http
      .put(environment.api + 'fees', fees);
  }
}
