import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, concatMap, exhaustMap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { DespesesFixesApiService } from 'src/app/core/api/despeses-fixes-api.service';
import { ActionTypes } from './despeses-fixes.actions';
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
                    map(despesesFixes => ({ type: ActionTypes.SET_DESPESA_FIXA, payload: despesesFixes })),
                    catchError(() => EMPTY)
                ))
        ));
}
