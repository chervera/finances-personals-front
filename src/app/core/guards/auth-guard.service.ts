import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectToken } from '../store/core.selectors';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad {
  constructor(
    private store: Store,
    public router: Router
  ) { }
  canLoad(): boolean {
    let token: string;
    this.store.select(selectToken).subscribe(tk => token = tk);
    if (!token) {
      this.router.navigate(['/auth/login']);
    }
    return !!token;
  }
}