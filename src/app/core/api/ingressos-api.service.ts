import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { DespesaFixa } from '../model/despesa-fixa.model';
import { HttpClient } from '@angular/common/http';
import { Ingres } from '../model/ingres.model';

@Injectable({
  providedIn: 'root'
})
export class IngressosApiService {

  readonly BASE_PATH = "/api/v1/ingressos";

  constructor(
    private http: HttpClient
  ) { }

  public findAll(filter): Observable<Ingres[]> {
    //return this.http.get<Ingres[]>(this.BASE_PATH, { params: filter });
    return of([
      {
        id: 1,
        concepte: 'Nòmina Carles',
        import: 1500,
        data: new Date('2020-04-1')
      }
    ]);
  }

  public find(id: string): Observable<Ingres> {
    return this.http.get<Ingres>(this.BASE_PATH + '/' + id);
  }

  public save(ingres: Ingres): Observable<void> {
    return this.http.post<void>(this.BASE_PATH, ingres);
  }

  public update(ingres: Ingres): Observable<void> {
    return this.http.put<void>(this.BASE_PATH + '/' + ingres.id, ingres);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(this.BASE_PATH + '/' + id);
  }
}
