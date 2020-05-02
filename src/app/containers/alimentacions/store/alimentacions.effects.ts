import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, concatMap, exhaustMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ActionTypes } from './alimentacions.actions';
import * as alimentacionsActions from './alimentacions.actions'
import { AlimentacionsApiService } from 'src/app/core/api/alimentacions-api.service';
import { Alimentacio } from 'src/app/core/model/alimentacio.model';

@Injectable()
export class AlimentacionsEffects {

    constructor(
        private actions$: Actions,
        private api: AlimentacionsApiService
    ) { }

    requestAlimentacio$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_ALIMENTACIO),
            exhaustMap((action: { payload }) =>
                this.api.find(action.payload).pipe(
                    map((alimentacio: Alimentacio) => alimentacionsActions.setAlimentacio({ payload: alimentacio })),
                    catchError(() => EMPTY)
                ))
        ));

    requestSaveAlimentacio$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_SAVE_ALIMENTACIO),
            map((action: { payload }) => action.payload),
            concatMap((alimentacio: Alimentacio) => this.api.save(alimentacio).pipe(
                map(() => alimentacionsActions.createAlimentacioSuccess()),
                catchError(() => EMPTY))
            )
        )
    );

    requestUpdateAlimentacio$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_UPDATE_ALIMENTACIO),
            map((action: { payload }) => action.payload),
            concatMap((alimentacio: Alimentacio) => this.api.update(alimentacio).pipe(
                map(() => alimentacionsActions.updateAlimentacioSuccess()),
                catchError(() => EMPTY))
            )
        )
    );

    requestDeleteAlimentacio$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_DELETE_ALIMENTACIO),
            map((action: { payload }) => action.payload),
            concatMap((id: number) => this.api.delete(id).pipe(
                map(() => alimentacionsActions.deleteAlimentacioSuccess()),
                catchError(() => EMPTY))
            )
        )
    );
}
