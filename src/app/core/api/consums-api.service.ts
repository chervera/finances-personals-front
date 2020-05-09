import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ingres } from '../model/ingres.model';
import { Consum } from '../model/consum.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumsApiService {

  readonly BASE_PATH = 'https://finances-personals-api.herokuapp.com/api/v1/consums';

  constructor(
    private http: HttpClient
  ) { }

  public findAll(filter): Observable<Consum[]> {
    return this.http.get<Consum[]>(this.BASE_PATH, { params: filter }).pipe(
      map((results: Consum[]) =>
        results.map((consum: Consum) => {
          consum.data = new Date(consum.data);
          return consum;
        }
        )
      )
    );
  }

  public find(id: string): Observable<Consum> {
    return this.http.get<Consum>(this.BASE_PATH + '/' + id);
  }

  public save(consum: Consum): Observable<void> {
    return this.http.post<void>(this.BASE_PATH, consum);
  }

  public update(consum: Consum): Observable<void> {
    return this.http.put<void>(this.BASE_PATH + '/' + consum.id, consum);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(this.BASE_PATH + '/' + id);
  }
}
