import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, concatMap, exhaustMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ActionTypes } from './tipus-alimentacions.actions';
import * as alimentacionsActions from './tipus-alimentacions.actions'
import { AlimentacionsApiService } from 'src/app/core/api/alimentacions-api.service';
import { Alimentacio } from 'src/app/core/model/alimentacio.model';
import { MastersApiService } from 'src/app/core/api/master-api.service';
import { TipusAlimentacio } from 'src/app/core/model/tipus-alimentacio.model';
import { requestTipusAlimentacio } from 'src/app/core/store/core.actions';

@Injectable()
export class TipusAlimentacionsEffects {

    constructor(
        private actions$: Actions,
        private api: MastersApiService
    ) { }

    requestSaveTipusAlimentacio$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_SAVE_TIPUS_ALIMENTACIO),
            map((action: { payload }) => action.payload),
            concatMap((tipusAlimentacio: TipusAlimentacio) => this.api.saveTipusAlimentacio(tipusAlimentacio).pipe(
                map(() => alimentacionsActions.saveTipusAlimentacioSuccess()),
                catchError(() => EMPTY))
            )
        )
    );

    requestDeleteAlimentacio$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_DELETE_TIPUS_ALIMENTACIO),
            map((action: { payload }) => action.payload),
            concatMap((id: number) => this.api.deleteTipusAlimentacio(id).pipe(
                map(() => alimentacionsActions.deleteTipusAlimentacioSuccess()),
                catchError(() => EMPTY))
            )
        )
    );

    requestReloadAlimentacio$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.SAVE_TIPUS_ALIMENTACIO_SUCCESS, ActionTypes.DELETE_TIPUS_ALIMENTACIO_SUCCESS),
            map(() => requestTipusAlimentacio()),

        )
    );
}
