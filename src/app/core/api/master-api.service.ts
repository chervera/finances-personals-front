import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { DespesaFixa } from '../model/despesa-fixa.model';
import { HttpClient } from '@angular/common/http';
import { Ingres } from '../model/ingres.model';
import { map, delay } from 'rxjs/operators';
import { TipusConsum } from '../model/tipus-consum.model';
import { TipusAlimentacio } from '../model/tipus-alimentacio.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MastersApiService {

  readonly BASE_PATH = environment.apiRootPath + '/api/v1/masters';
  readonly BASE_PATH_TIPUS_CONSUM = '/tipus-consums';
  readonly BASE_PATH_TIPUS_ALIMENTACIO = '/tipus-alimentacions';

  constructor(
    private http: HttpClient
  ) { }

  public findTipusConsums(): Observable<TipusConsum[]> {
    return this.http.get<TipusConsum[]>(this.BASE_PATH + this.BASE_PATH_TIPUS_CONSUM);
  }

  public saveTipusConsum(tipus: TipusConsum): Observable<void> {
    return this.http.post<void>(this.BASE_PATH + this.BASE_PATH_TIPUS_CONSUM, tipus);
  }

  public deleteTipusConsum(id: number): Observable<void> {
    return this.http.delete<void>(this.BASE_PATH + this.BASE_PATH_TIPUS_CONSUM + '/' + id);
  }

  public findTipusAlimentacio(): Observable<TipusConsum[]> {
    return this.http.get<TipusConsum[]>(this.BASE_PATH + this.BASE_PATH_TIPUS_ALIMENTACIO);
  }

  public saveTipusAlimentacio(tipus: TipusAlimentacio): Observable<void> {
    return this.http.post<void>(this.BASE_PATH + this.BASE_PATH_TIPUS_ALIMENTACIO, tipus);
  }

  public deleteTipusAlimentacio(id: number): Observable<void> {
    return this.http.delete<void>(this.BASE_PATH + this.BASE_PATH_TIPUS_ALIMENTACIO + '/' + id);
  }


}
