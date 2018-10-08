import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { ScoutType } from '../enums/scoutType';
import { EnumElement } from '../interfaces/enumElement';
import { ScoutList } from '../interfaces/scoutList';
import { ScoutEmail } from '../interfaces/scoutEmail';
import { ScoutDetail } from '../interfaces/scoutDetail';


@Injectable({
  providedIn: 'root'
})
export class ScoutService {

  public ScoutTypes: Observable<EnumElement[]>;

  constructor(private http: HttpClient) {
    this.ScoutTypes = this.LoadScoutTypes();
  }

  public LoadScoutTypes(): Observable<EnumElement[]> {
    return this.http
      .get<EnumElement[]>(environment.api + 'scoutType');
  }


  public LoadScouts(type: ScoutType, includeDeleted: boolean): Observable<ScoutList[]> {
    const url = environment.api + 'scoutsummary/' + type;
    return this.http
      .get<ScoutList[]>(url);
  }

  public LoadEmails(type: ScoutType): Observable<ScoutEmail[]> {
    return this.http
      .get<ScoutEmail[]>(environment.api + 'scoutsummary/emails/' + type);

  }

  public Load(id: number): Observable<ScoutDetail> {
    if (!id) {
      return of(<ScoutDetail>{
        active: true, address: '', balance: 0, dOB: '', firstName: '', lastName: '', medical: '', memberNumber: '',
        postcode: '2233', section: ScoutType.Scout, state: 'NSW', suburb: 'Heathcote', scoutId: 0
      });
    }
    return this.http
      .get<ScoutDetail>(environment.api + 'scout/' + id)
      .pipe(map((value, index) => {
        return value;
      }));
  }

  public Save(detail: ScoutDetail) {
    return this.http
      .post<ScoutDetail>(environment.api + 'scout', detail);
  }
}
