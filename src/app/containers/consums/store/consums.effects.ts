import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, concatMap, exhaustMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ActionTypes } from './consums.actions';
import * as consumsActions from './consums.actions'
import { ConsumsApiService } from 'src/app/core/api/consums-api.service';
import { Consum } from 'src/app/core/model/consum.model';

@Injectable()
export class ConsumsEffects {

    constructor(
        private actions$: Actions,
        private api: ConsumsApiService
    ) { }

    requestConsum$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_CONSUM),
            exhaustMap((action: { payload }) =>
                this.api.find(action.payload).pipe(
                    map((consum: Consum) => consumsActions.setConsum({ payload: consum })),
                    catchError(() => EMPTY)
                ))
        ));

    requestSaveConsum$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_SAVE_CONSUM),
            map((action: { payload }) => action.payload),
            concatMap((consum: Consum) => this.api.save(consum).pipe(
                map(() => consumsActions.createConsumSuccess()),
                catchError(() => EMPTY))
            )
        )
    );

    requestUpdateConsum$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_UPDATE_CONSUM),
            map((action: { payload }) => action.payload),
            concatMap((consum: Consum) => this.api.update(consum).pipe(
                map(() => consumsActions.updateConsumSuccess()),
                catchError(() => EMPTY))
            )
        )
    );

    requestDeleteConsum$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.REQUEST_DELETE_CONSUM),
            map((action: { payload }) => action.payload),
            concatMap((id: number) => this.api.delete(id).pipe(
                map(() => consumsActions.deleteConsumSuccess()),
                catchError(() => EMPTY))
            )
        )
    );
}
