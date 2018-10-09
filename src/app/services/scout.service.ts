import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
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

  public get ScoutTypes(): Observable<EnumElement[]> {
    return this._scoutTypeSubject.asObservable()
  };

  private _scoutTypeSubject = new BehaviorSubject<EnumElement[]>([
    { value: 1, name: 'Joey' },
    { value: 2, name: 'Cub' },
    { value: 3, name: 'Scout' },
    { value: 4, name: 'Venturer' },
    { value: 5, name: 'Rover' },
    { value: 6, name: 'Leader' },
    { value: 7, name: 'Parent Helper' },
  ])

  constructor(private http: HttpClient) {
    this.LoadScoutTypes();
  }

  public LoadScoutTypes() {
    this.http
      .get<EnumElement[]>(environment.api + 'scoutType')
      .subscribe(x => this._scoutTypeSubject.next(x),
        error => console.error(error)
      );
  }

  public LoadScouts(type: ScoutType, includeDeleted: boolean): Observable<ScoutList[]> {
    const url = environment.api + 'scoutSummary/' + type;
    return this.http
      .get<ScoutList[]>(url);
  }

  public LoadEmails(type: ScoutType): Observable<ScoutEmail[]> {
    return this.http
      .get<ScoutEmail[]>(environment.api + 'scoutSummary/emails/' + type);

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
