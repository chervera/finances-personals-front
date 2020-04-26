import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { DespesaFixa } from '../model/despesa-fixa.model';
import { HttpClient } from '@angular/common/http';
import { Ingres } from '../model/ingres.model';
import { DespesaConsum } from '../model/despesa-consum.model';

@Injectable({
  providedIn: 'root'
})
export class ConsumsApiService {

  readonly BASE_PATH = "/api/v1/consums";

  constructor(
    private http: HttpClient
  ) { }

  public findAll(filter): Observable<DespesaConsum[]> {
    //return this.http.get<Ingres[]>(this.BASE_PATH, { params: filter });
    return of([
      {
        id: 1,
        import: 1500,
        tipusId: 1,
        data: new Date('2020-04-1')
      }
    ]);
  }

  public find(id: string): Observable<DespesaConsum> {
    return this.http.get<DespesaConsum>(this.BASE_PATH + '/' + id);
  }

  public save(consum: DespesaConsum): Observable<void> {
    return this.http.post<void>(this.BASE_PATH, consum);
  }

  public update(consum: DespesaConsum): Observable<void> {
    return this.http.put<void>(this.BASE_PATH + '/' + consum.id, consum);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(this.BASE_PATH + '/' + id);
  }
}
