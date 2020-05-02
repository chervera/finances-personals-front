import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { clearState } from '../store/core.actions';
import { AuthService } from 'src/app/containers/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthErrorInterceptorService implements HttpInterceptor {

  constructor(
    private store: Store,
    private router: Router,
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401 || error.status == 403) {
          this.authService.deleteToken();
          this.store.dispatch(clearState());
          this.router.navigate(['/auth/login']);
        }
        return throwError(error);
      })
    );
  }
}
