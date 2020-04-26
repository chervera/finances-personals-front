import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { requestDespesaFixa, createDespesaFixa, requestSaveDespesaFixa, requestUpdateDespesaFixa } from '../../store/despeses-fixes.actions';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import { Observable } from 'rxjs';
import { selectDespesaFixa } from '../../store/despeses-fixes.selectors';
import { tap, map, take } from 'rxjs/operators';
import { FormDespesaFixaComponent } from './components/form-despesa-fixa/form-despesa-fixa.component';
import { routerNavigationAction } from '@ngrx/router-store';
import { Actions, ofType } from '@ngrx/effects';
import { ActionTypes } from './../../store/despeses-fixes.actions';
import { requestDespesesFixes } from 'src/app/core/store/core.actions';

@Component({
  selector: 'app-despesa-fixa',
  templateUrl: './despesa-fixa.container.html',
  styleUrls: ['./despesa-fixa.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DespesaFixaContainer implements OnInit {

  @ViewChild(FormDespesaFixaComponent) formComponent;

  despesaFixa$: Observable<DespesaFixa> = this.store.select(selectDespesaFixa);

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private actions$: Actions
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.store.dispatch(requestDespesaFixa({ payload: params.get('id') }));
      } else {
        this.store.dispatch(createDespesaFixa());
      }
    });

    this.actions$.pipe(
      ofType(ActionTypes.CREATE_DESPESA_FIXA_SUCCESS, ActionTypes.UPDATE_DESPESA_FIXA_SUCCESS),
      take(1)
    ).subscribe(() => {
      this.store.dispatch(requestDespesesFixes());
      this.router.navigate(['/despeses-fixes'])
    });
  }

  save() {
    const despesaFixa = this.formComponent.getValue();
    if (despesaFixa.id) {
      this.store.dispatch(requestUpdateDespesaFixa({ payload: despesaFixa }));
    } else {
      this.store.dispatch(requestSaveDespesaFixa({ payload: despesaFixa }));
    }
  }

}
