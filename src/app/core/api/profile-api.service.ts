import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { DespesaFixa } from '../model/despesa-fixa.model';
import { HttpClient } from '@angular/common/http';
import { Ingres } from '../model/ingres.model';
import { map, delay } from 'rxjs/operators';
import { TipusConsum } from '../model/tipus-consum.model';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  readonly BASE_PATH = environment.apiRootPath + '/api/v1/perfil';

  constructor(
    private http: HttpClient
  ) { }

  public findMyProfile(): Observable<User> {
    return this.http.get<User>(this.BASE_PATH);
  }

  public updateMyProfile(profile: User): Observable<void> {
    return this.http.put<void>(this.BASE_PATH, profile);
  }


}
