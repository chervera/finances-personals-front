import { Component, OnInit, ViewChild } from '@angular/core';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { State, Store, props } from '@ngrx/store';
import { requestLogin } from 'src/app/core/store/core.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.container.html',
  styleUrls: ['./auth.container.scss']
})
export class AuthContainer implements OnInit {

  @ViewChild(FormLoginComponent) formComponent;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  login() {
    const { username, password } = this.formComponent.getValue();
    this.store.dispatch(requestLogin({ payload: { username, password } }));
  }

}
