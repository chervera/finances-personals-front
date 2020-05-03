import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectToken } from '../store/core.selectors';
import { AuthService } from 'src/app/containers/auth/services/auth.service';
import { Router } from '@angular/router';
import { setToken } from '../store/core.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private store: Store,
    private auth: AuthService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: string;
    this.store.select(selectToken).subscribe(tk => token = tk);
    let request = req;

    if (token && this.auth.isTokenExpired()) {
      this.auth.deleteToken();
      this.store.dispatch(setToken(null));
      this.router.navigate(['/auth/login']);
      return EMPTY;
    }

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
