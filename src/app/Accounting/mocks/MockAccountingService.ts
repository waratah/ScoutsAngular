import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EnumElement } from "app/interfaces/enumelement";
import { Fee } from "app/interfaces/fee";



@Injectable()
export class MockAccountingService {

    public fees: Fee[];
    private http: Http;

    constructor() { }

    public Fees(): Observable<Fee[]> {
        return Observable.of(this.fees);
    }

    public SaveFees(fees: Fee[]): void {
        this.fees = fees;
    }
}