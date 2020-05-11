import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/user.model';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/core/store/core.selectors';
import { ActionTypes, requestProfile, requestUpdateProfile } from 'src/app/core/store/core.actions';
import { FormProfileComponent } from './components/form-profile/form-profile.component';
import { Actions, ofType } from '@ngrx/effects';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.container.html',
  styleUrls: ['./profile.container.scss']
})
export class ProfileContainer implements OnInit {

  user$: Observable<User> = this.store.select(selectUser);

  @ViewChild(FormProfileComponent) formComponent;

  constructor(
    private store: Store,
    private actions$: Actions,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.actions$.pipe(
      ofType(ActionTypes.UPDATE_PROFILE_SUCCESS),
      take(1)
    ).subscribe(() => {
      this.store.dispatch(requestProfile());
      this.router.navigate(['/ingressos']);
    });
  }

  save() {
    const profile = this.formComponent.getValue();
    console.log(profile);
    this.store.dispatch(requestUpdateProfile({ payload: profile }));
  }

}
