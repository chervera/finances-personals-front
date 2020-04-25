import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, concatMap, exhaustMap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { DespesesFixesApiService } from 'src/app/core/api/despeses-fixes-api.service';
import { ActionTypes } from './despeses-fixes.actions';
import { ActionTypes as CoreActionTypes, requestDespesesFixes } from 'src/app/core/store/core.actions';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import { Action } from '@ngrx/store';
import * as despesesFixesActions from './despeses-fixes.actions'

@Injectable()
export class DespesesFixesEffects {

    constructor(
        private actions$: Actions,
        private api: DespesesFixesApiService
    ) { }

    requestDespesaFixa$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_DESPESA_FIXA),
            exhaustMap((action: { payload }) =>
                this.api.find(action.payload).pipe(
                    map((despesaFixa: DespesaFixa) => despesesFixesActions.setDespesaFixa({ payload: despesaFixa })),
                    catchError(() => EMPTY)
                ))
        ));

    requestSaveDespesaFixa$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_SAVE_DESPESA_FIXA),
            map((action: { payload }) => action.payload),
            concatMap((despesaFixa: DespesaFixa) => this.api.save(despesaFixa).pipe(
                map(() => despesesFixesActions.createDespesaFixaSuccess()),
                catchError(() => EMPTY))
            )
        )
    );
}
