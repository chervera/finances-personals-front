import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Alimentacio } from '../model/alimentacio.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlimentacionsApiService {

  readonly BASE_PATH = '/api/v1/alimentacions';

  constructor(
    private http: HttpClient
  ) { }

  public findAll(filter): Observable<Alimentacio[]> {
    return this.http.get<Alimentacio[]>(this.BASE_PATH, { params: filter }).pipe(
      map((results: Alimentacio[]) =>
        results.map((alimentacio: Alimentacio) => {
          alimentacio.data = new Date(alimentacio.data);
          return alimentacio;
        }
        )
      )
    );
  }

  public find(id: string): Observable<Alimentacio> {
    return this.http.get<Alimentacio>(this.BASE_PATH + '/' + id);
  }

  public save(alimentacio: Alimentacio): Observable<void> {
    return this.http.post<void>(this.BASE_PATH, alimentacio);
  }

  public update(alimentacio: Alimentacio): Observable<void> {
    return this.http.put<void>(this.BASE_PATH + '/' + alimentacio.id, alimentacio);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(this.BASE_PATH + '/' + id);
  }
}
