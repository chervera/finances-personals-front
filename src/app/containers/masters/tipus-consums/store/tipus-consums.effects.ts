import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, concatMap, exhaustMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ActionTypes } from './tipus-consums.actions';
import * as consumsActions from './tipus-consums.actions'
import { ConsumsApiService } from 'src/app/core/api/consums-api.service';
import { Consum } from 'src/app/core/model/consum.model';
import { MastersApiService } from 'src/app/core/api/master-api.service';
import { TipusConsum } from 'src/app/core/model/tipus-consum.model';
import { requestTipusConsum } from 'src/app/core/store/core.actions';

@Injectable()
export class TipusConsumsEffects {

    constructor(
        private actions$: Actions,
        private api: MastersApiService
    ) { }

    requestSaveTipusConsum$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_SAVE_TIPUS_CONSUM),
            map((action: { payload }) => action.payload),
            concatMap((tipusConsum: TipusConsum) => this.api.saveTipusConsum(tipusConsum).pipe(
                map(() => consumsActions.saveTipusConsumSuccess()),
                catchError(() => EMPTY))
            )
        )
    );

    requestDeleteConsum$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_DELETE_TIPUS_CONSUM),
            map((action: { payload }) => action.payload),
            concatMap((id: number) => this.api.deleteTipusConsum(id).pipe(
                map(() => consumsActions.deleteTipusConsumSuccess()),
                catchError(() => EMPTY))
            )
        )
    );

    requestReloadConsum$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.SAVE_TIPUS_CONSUM_SUCCESS, ActionTypes.DELETE_TIPUS_CONSUM_SUCCESS),
            map(() => requestTipusConsum()),

        )
    );
}
