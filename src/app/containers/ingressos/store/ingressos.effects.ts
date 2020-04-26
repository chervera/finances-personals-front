import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, concatMap, exhaustMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ActionTypes } from './ingressos.actions';
import * as ingressosActions from './ingressos.actions'
import { IngressosApiService } from 'src/app/core/api/ingressos-api.service';
import { Ingres } from 'src/app/core/model/ingres.model';

@Injectable()
export class IngressosEffects {

    constructor(
        private actions$: Actions,
        private api: IngressosApiService
    ) { }

    requestIngres$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_INGRES),
            exhaustMap((action: { payload }) =>
                this.api.find(action.payload).pipe(
                    map((ingres: Ingres) => ingressosActions.setIngres({ payload: ingres })),
                    catchError(() => EMPTY)
                ))
        ));

    requestSaveIngres$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_SAVE_INGRES),
            map((action: { payload }) => action.payload),
            concatMap((ingres: Ingres) => this.api.save(ingres).pipe(
                map(() => ingressosActions.createIngresSuccess()),
                catchError(() => EMPTY))
            )
        )
    );

    requestUpdateIngres$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_UPDATE_INGRES),
            map((action: { payload }) => action.payload),
            concatMap((ingres: Ingres) => this.api.update(ingres).pipe(
                map(() => ingressosActions.updateIngresSuccess()),
                catchError(() => EMPTY))
            )
        )
    );

    requestDeleteIngres$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_DELETE_INGRES),
            map((action: { payload }) => action.payload),
            concatMap((id: number) => this.api.delete(id).pipe(
                map(() => ingressosActions.deleteIngresSuccess()),
                catchError(() => EMPTY))
            )
        )
    );
}
