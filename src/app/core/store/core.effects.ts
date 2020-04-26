import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionTypes } from './core.actions';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { DespesesFixesApiService } from '../api/despeses-fixes-api.service';
import { EMPTY } from 'rxjs';
import { Store } from '@ngrx/store';
import * as CoreSelectors from 'src/app/core/store/core.selectors';
import { Filter } from 'src/app/shared/filter/filter.model';
import { IngressosApiService } from '../api/ingressos-api.service';
import { ConsumsApiService } from '../api/consums-api.service';
import { AlimentacioApiService } from '../api/alimentacio-api.service';


@Injectable()
export class CoreEffects {

    constructor(
        private actions$: Actions,
        private despesesFixesApi: DespesesFixesApiService,
        private ingressosApi: IngressosApiService,
        private consumsApi: ConsumsApiService,
        private alimentacioApi: AlimentacioApiService,
        private store: Store
    ) { }

    requestDespesesFixes$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.REQUEST_DESPESES_FIXES),
        withLatestFrom(this.store.select(CoreSelectors.selectMainFilter)),
        mergeMap(([action, filter]) => this.despesesFixesApi.findAll(filter)
            .pipe(
                map(despesesFixes => ({ type: ActionTypes.SET_DESPESES_FIXES, payload: despesesFixes })),
                catchError(() => EMPTY)
            ))
    ));

    requestIngressos$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.REQUEST_INGRESSOS),
        withLatestFrom(this.store.select(CoreSelectors.selectMainFilter)),
        mergeMap(([action, filter]) => this.ingressosApi.findAll(filter)
            .pipe(
                map(ingresos => ({ type: ActionTypes.SET_INGRESSOS, payload: ingresos })),
                catchError(() => EMPTY)
            ))
    ));

    requestConsums$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.REQUEST_CONSUMS),
        withLatestFrom(this.store.select(CoreSelectors.selectMainFilter)),
        mergeMap(([action, filter]) => this.consumsApi.findAll(filter)
            .pipe(
                map(consums => ({ type: ActionTypes.SET_CONSUMS, payload: consums })),
                catchError(() => EMPTY)
            ))
    ));

    requestAlimentacio$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.REQUEST_ALIMENTACIO),
        withLatestFrom(this.store.select(CoreSelectors.selectMainFilter)),
        mergeMap(([action, filter]) => this.alimentacioApi.findAll(filter)
            .pipe(
                map(alimentacions => ({ type: ActionTypes.SET_ALIMENTACIO, payload: alimentacions })),
                catchError(() => EMPTY)
            ))
    ));
}
