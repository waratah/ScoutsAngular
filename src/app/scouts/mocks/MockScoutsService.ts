import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ScoutType } from "app/enums/ScoutType";
import { ScoutDetail } from "app/interfaces/scoutDetail";
import { ScoutEmail } from "app/interfaces/scoutEmail";
import { ScoutList } from "app/interfaces/scoutList";
import { EnumElement } from "app/interfaces/enumelement";
import { ScoutsService } from "../services/scouts.service";



@Injectable()
export class MockScoutsService {

    public scoutTypes: EnumElement[];
    public scoutDetail: ScoutDetail;
    public scoutEmail: ScoutEmail[];
    public scoutList: ScoutList[];
    private http: Http;

    constructor() { }

    ScoutTypes = Observable.of(this.scoutTypes);

    public LoadScoutTypes(): Observable<EnumElement[]> {
        return this.ScoutTypes;
    }

    public LoadScouts(type: ScoutType, includeDeleted: boolean): Observable<ScoutList[]> {
        return Observable.of(this.scoutList);
    }

    public LoadEmails(type: ScoutType): Observable<ScoutEmail[]> {
        return Observable.of(this.scoutEmail);
    }

    public Load(id: number): Observable<ScoutDetail> {
        return Observable.of(this.scoutDetail);
    }
}