import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionTypes } from './core.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DespesesFixesApiService } from '../api/despeses-fixes-api.service';
import { EMPTY } from 'rxjs';


@Injectable()
export class CoreEffects {

    constructor(
        private actions$: Actions,
        private despesesFixesApi: DespesesFixesApiService
    ) { }

    requestDespesesFixes$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.REQUEST_DESPESES_FIXES),
        mergeMap(() => this.despesesFixesApi.findAll()
            .pipe(
                map(despesesFixes => ({ type: ActionTypes.SET_DESPESES_FIXES, payload: despesesFixes })),
                catchError(() => EMPTY)
            ))
    ));
}
