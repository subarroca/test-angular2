import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import { Observable } from 'rxjs';


@Injectable()
export class StatsService {
  private statsUrl: string = 'http://api.idescat.cat/emex/v1/nodes.json?tipus=mun';
  private info$: Observable<any>;

  constructor(private http: Http) {  }

  getCities(): Observable<any> {
    return this.loadInfo();
  }

  getCityStats(id: string): Observable<any> {
    return this.http.get(`http://api.idescat.cat/emex/v1/geo/${id}.json`)
    .map((res) => res.json());
  }

  private loadInfo(): Observable<any> {
    if (!this.info$) {
      this.info$ = this.http.get(this.statsUrl)
      .map( (res) => res.json() );
    }

    return this.info$;
  }

}
