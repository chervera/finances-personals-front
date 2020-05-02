import { Component, OnInit, ViewChild } from '@angular/core';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { State, Store, props } from '@ngrx/store';
import { requestLogin } from 'src/app/core/store/core.actions';
import { selectToken } from 'src/app/core/store/core.selectors';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.container.html',
  styleUrls: ['./auth.container.scss']
})
export class AuthContainer implements OnInit {

  @ViewChild(FormLoginComponent) formComponent;

  constructor(
    private store: Store,
    private router: Router
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
