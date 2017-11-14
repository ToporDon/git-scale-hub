import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/delay';

@Injectable()
export class HttpService {

    public host = 'http://localhost:6671/api';

    public loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private http: HttpClient) { }

    private _loading<T>(result): Observable<T> {
        this.loading$.next(true);
        return result.finally(() => this.loading$.next(false));
    }

    public get<T>(route, params?): Observable<T> {
        return this._loading<T>(this.http.get<T>(`${this.host}/${route}`, params));
    }

    public post<T>(route, data, params?): Observable<T> {
        return this._loading<T>(this.http.post(`${this.host}/${route}`, data, params));
    }

    public put<T>(route, data, params?): Observable<T> {
        return this._loading<T>(this.http.put(`${this.host}/${route}`, data, params));
    }

    public delete<T>(route, params?): Observable<T>  {
        return this._loading<T>(this.http.delete(`${this.host}/${route}`, params));
    }
}
