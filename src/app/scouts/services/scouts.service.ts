import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, RequestMethod, Request } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { ServiceBase } from "app/services/serviceBase";

import { EnumElement } from 'app/interfaces/enumelement';
import { ScoutList } from "app/interfaces/scoutList";
import { ScoutType } from "app/enums/ScoutType";
import { ScoutEmail } from "app/interfaces/scoutEmail";
import { ScoutDetail } from "app/interfaces/scoutDetail";

@Injectable()
export class ScoutsService extends ServiceBase {
  public ScoutTypes: Observable<EnumElement[]>;

  constructor(private http: Http) {
    super();
    this.ScoutTypes = this.LoadScoutTypes();
  }

  public LoadScoutTypes(): Observable<EnumElement[]> {
    return this.http
      .get(this.api + 'scoutType')
      .map((value, index) => {
        var data: EnumElement[] = value.json();
        return data;
      })
      .catch(this.handleError);
  }


  public LoadScouts(type: ScoutType, includeDeleted: boolean): Observable<ScoutList[]> {
    var url = this.api + 'scoutsummary/' + type;
    return this.http
      .get(url)
      .map((value, index) => {
        var data: ScoutList[] = value.json();

        return data;
      })
      .catch(this.handleError);
  }

  public LoadEmails(type: ScoutType): Observable<ScoutEmail[]> {
    return this.http
      .get(this.api + 'scoutsummary/emails/' + type)
      .map((value, index) => {
        var data: ScoutEmail[] = value.json();

        return data;
      })
      .catch(this.handleError);
  }

  public Load(id: number): Observable<ScoutDetail> {
    if (!id)
      return Observable.of(<ScoutDetail>{
        active: true, address: '', balance: 0, dOB: '', firstName: '', lastName: '', medical: '', memberNumber: '',
        postcode: '2233', section: ScoutType.Scout, state: 'NSW', suburb: 'Heathcote', scoutId: 0
      });
    return this.http
      .get(this.api + 'scout/' + id)
      .map((value, index) => {
        var data: ScoutDetail = value.json();
        return data;
      })
      .catch(this.handleError);
  }

  public Save(detail: ScoutDetail) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions(
      {
        headers: headers,
        method: RequestMethod.Post,
      });

    return this.http
      .put(this.api + 'scout', detail, requestOptions)
      .map((value, index) => {
        return value.json();
      })
      .catch(this.handleError);
  }
}
