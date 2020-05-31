import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { State, Store, props } from '@ngrx/store';
import { requestLogin, ActionTypes } from 'src/app/core/store/core.actions';
import { selectToken, selectAuthIsLoading } from 'src/app/core/store/core.selectors';
import { filter, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.container.html',
  styleUrls: ['./auth.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthContainer implements OnInit {

  public isLoading = false;

  selectAuthIsLoading$ = this.store.select(selectAuthIsLoading).pipe(
    tap((event) => console.log('carles'))
  );

  @ViewChild(FormLoginComponent) formComponent;

  constructor(
    private store: Store,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.store.select(selectToken).pipe(filter(token => !!token)).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  login() {
    const { username, password } = this.formComponent.getValue();
    this.store.dispatch(requestLogin({ payload: { username, password } }));
  }

}
