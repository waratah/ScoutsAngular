import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, RequestMethod, Request } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { ServiceBase } from "app/services/serviceBase";
import { Fee } from "app/interfaces/fee";


@Injectable()
export class AccountingService extends ServiceBase {

  constructor(private http: Http) {
    super();
  }

  public Fees(): Observable<Fee[]> {
    return this.http
      .get(this.api + 'fees')
      .map((value, index) => {
        var data: Fee[] = value.json();
        return data;
      })
      .catch(this.handleError);
  }

  public SaveFees(fees: Fee[]) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions(
      {
        headers: headers,
        method: RequestMethod.Post,
      });

    return this.http
      .put(this.api + 'fees', fees, requestOptions)
      .map((value, index) => {
        return value.json();
      })
      .catch(this.handleError)
      .subscribe(x => {
      });
  }
}
