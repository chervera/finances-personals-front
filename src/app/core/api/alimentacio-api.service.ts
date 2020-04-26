import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { DespesaFixa } from '../model/despesa-fixa.model';
import { HttpClient } from '@angular/common/http';
import { Ingres } from '../model/ingres.model';
import { DespesaConsum } from '../model/despesa-consum.model';
import { DespesaAlimentacio } from '../model/despesa-alimentacio.model';

@Injectable({
  providedIn: 'root'
})
export class AlimentacioApiService {

  readonly BASE_PATH = "/api/v1/alimentacio";

  constructor(
    private http: HttpClient
  ) { }

  public findAll(filter): Observable<DespesaConsum[]> {
    //return this.http.get<Ingres[]>(this.BASE_PATH, { params: filter });
    return of([
      {
        id: 1,
        import: 300,
        tipusId: 1,
        data: new Date('2020-04-1')
      }
    ]);
  }

  public find(id: string): Observable<DespesaAlimentacio> {
    return this.http.get<DespesaAlimentacio>(this.BASE_PATH + '/' + id);
  }

  public save(alimentacio: DespesaAlimentacio): Observable<void> {
    return this.http.post<void>(this.BASE_PATH, alimentacio);
  }

  public update(alimentacio: DespesaAlimentacio): Observable<void> {
    return this.http.put<void>(this.BASE_PATH + '/' + alimentacio.id, alimentacio);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(this.BASE_PATH + '/' + id);
  }
}
