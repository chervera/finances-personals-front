import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/model/user.model';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  readonly BASE_PATH = '/api/v1/auth/';

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post<User>(this.BASE_PATH + 'login', { email, password }).pipe(
      shareReplay(1)
    );
  }
}
