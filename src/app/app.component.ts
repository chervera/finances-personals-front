import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { requestDespesesFixes, toggleIsMenuShowed, requestIngressos, requestConsums, requestAlimentacions, requestMasters, requestLogout } from './core/store/core.actions';
import * as CoreSelectors from 'src/app/core/store/core.selectors';
import { Observable } from 'rxjs';
import { User } from './core/model/user.model';
import { tap, filter, share, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  isMenuShowed$: Observable<boolean> = this.store.select(CoreSelectors.selectIsMenuShowed);
  token$: Observable<string> = this.store.select(CoreSelectors.selectToken);
  user$: Observable<User> = this.store.select(CoreSelectors.selectUser);

  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.store.dispatch(toggleIsMenuShowed());
  }

  logout() {
    this.store.dispatch(requestLogout());
    this.router.navigate(['/auth/login']);
  }

  closeMenu() {
    this.store.dispatch(toggleIsMenuShowed());
  }

}
