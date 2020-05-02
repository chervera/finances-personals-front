import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import { ActionTypes, requestUpdateAlimentacio, requestSaveAlimentacio, requestAlimentacio, createAlimentacio } from '../../store/alimentacions.actions';
import { Alimentacio } from 'src/app/core/model/alimentacio.model';
import { selectAlimentacio } from '../../store/alimentacions.selectors';
import { requestAlimentacions } from 'src/app/core/store/core.actions';
import { FormAlimentacioComponent } from './components/form-alimentacio/form-alimentacio.component';
import { TipusAlimentacio } from 'src/app/core/model/tipus-alimentacio.model';
import { selectTipusAlimentacions } from 'src/app/core/store/core.selectors';

@Component({
  selector: 'app-alimentacio',
  templateUrl: './alimentacio.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlimentacioContainer implements OnInit {

  @ViewChild(FormAlimentacioComponent) formComponent;

  alimentacio$: Observable<Alimentacio> = this.store.select(selectAlimentacio);
  tipusAlimentacions$: Observable<TipusAlimentacio[]> = this.store.select(selectTipusAlimentacions);

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private actions$: Actions
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.store.dispatch(requestAlimentacio({ payload: params.get('id') }));
      } else {
        this.store.dispatch(createAlimentacio());
      }
    });

    this.actions$.pipe(
      ofType(ActionTypes.CREATE_ALIMENTACIO_SUCCESS, ActionTypes.UPDATE_ALIMENTACIO_SUCCESS),
      take(1)
    ).subscribe(() => {
      this.store.dispatch(requestAlimentacions());
      this.router.navigate(['/alimentacions'])
    });
  }

  save() {
    const alimentacio = this.formComponent.getValue();
    if (alimentacio.id) {
      this.store.dispatch(requestUpdateAlimentacio({ payload: alimentacio }));
    } else {
      this.store.dispatch(requestSaveAlimentacio({ payload: alimentacio }));
    }
  }

}
