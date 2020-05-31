import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/model/user.model';
import { shareReplay, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  readonly BASE_PATH = '/api/v1/auth/';

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(this.BASE_PATH + 'login', { username, password }).pipe(
      shareReplay(1),
    );
  }
}
