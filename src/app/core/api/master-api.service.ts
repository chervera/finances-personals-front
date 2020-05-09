import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { DespesaFixa } from '../model/despesa-fixa.model';
import { HttpClient } from '@angular/common/http';
import { Ingres } from '../model/ingres.model';
import { map, delay } from 'rxjs/operators';
import { TipusConsum } from '../model/tipus-consum.model';


@Injectable({
  providedIn: 'root'
})
export class MastersApiService {

  readonly BASE_PATH = 'https://finances-personals-api.herokuapp.com/api/v1/masters';
  readonly BASE_PATH_TIPUS_CONSUM = '/tipus-consums';
  readonly BASE_PATH_TIPUS_ALIMENTACIO = '/tipus-alimentacions';

  constructor(
    private http: HttpClient
  ) { }

  public findTipusConsums(): Observable<TipusConsum[]> {
    return this.http.get<TipusConsum[]>(this.BASE_PATH + this.BASE_PATH_TIPUS_CONSUM);
  }

  public findTipusAlimentacio(): Observable<TipusConsum[]> {
    return this.http.get<TipusConsum[]>(this.BASE_PATH + this.BASE_PATH_TIPUS_ALIMENTACIO);
  }


}
