import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { DespesaFixa } from '../model/despesa-fixa.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DespesesFixesApiService {

  readonly BASE_PATH = environment.apiRootPath + '/api/v1/despeses-fixes';

  constructor(
    private http: HttpClient
  ) { }

  public findAll(filter): Observable<DespesaFixa[]> {
    return this.http.get<DespesaFixa[]>(this.BASE_PATH, { params: filter });
  }

  public find(id: string): Observable<DespesaFixa> {
    return this.http.get<DespesaFixa>(this.BASE_PATH + '/' + id);
  }

  public save(despesaFixa: DespesaFixa): Observable<void> {
    return this.http.post<void>(this.BASE_PATH, despesaFixa);
  }

  public update(despesaFixa: DespesaFixa): Observable<void> {
    return this.http.put<void>(this.BASE_PATH + '/' + despesaFixa.id, despesaFixa);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(this.BASE_PATH + '/' + id);
  }
}
