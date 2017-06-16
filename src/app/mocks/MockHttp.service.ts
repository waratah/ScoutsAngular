import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MockHttpClient<T> {

  constructor() { }

  public value: T;

  public headers: Headers = new Headers();

  addHeader(key: string, value: string): void {
    this.headers.append(key, value);
  }
  clearHeader(): void {
    this.headers = new Headers();
  }

  get(url: string) {
    var resp = new Response({ body: JSON.stringify(this.value), headers: new Headers(), status: 200, url: url, merge: null });
    let sub = new BehaviorSubject(resp);
    return sub.asObservable();
  }

  post(url: string, data: any) {
    return this.get(url);
  }
}