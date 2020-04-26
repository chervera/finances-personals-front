import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import { ActionTypes, requestUpdateIngres, requestSaveIngres, requestIngres, createIngres } from '../../store/ingressos.actions';
import { Ingres } from 'src/app/core/model/ingres.model';
import { selectIngres } from '../../store/ingressos.selectors';
import { requestIngressos } from 'src/app/core/store/core.actions';
import { FormIngresComponent } from './components/form-ingres/form-ingres.component';

@Component({
  selector: 'app-ingres',
  templateUrl: './ingres.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngresContainer implements OnInit {

  @ViewChild(FormIngresComponent) formComponent;

  ingres$: Observable<Ingres> = this.store.select(selectIngres);

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private actions$: Actions
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.store.dispatch(requestIngres({ payload: params.get('id') }));
      } else {
        this.store.dispatch(createIngres());
      }
    });

    this.actions$.pipe(
      ofType(ActionTypes.CREATE_INGRES_SUCCESS, ActionTypes.UPDATE_INGRES_SUCCESS),
      take(1)
    ).subscribe(() => {
      this.store.dispatch(requestIngressos());
      this.router.navigate(['/ingressos'])
    });
  }

  save() {
    const ingres = this.formComponent.getValue();
    if (ingres.id) {
      this.store.dispatch(requestUpdateIngres({ payload: ingres }));
    } else {
      this.store.dispatch(requestSaveIngres({ payload: ingres }));
    }
  }

}
