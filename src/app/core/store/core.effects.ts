import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionTypes } from './core.actions';
import * as CoreActions from './core.actions';
import { map, mergeMap, catchError, withLatestFrom, tap, switchMap, } from 'rxjs/operators';
import { DespesesFixesApiService } from '../api/despeses-fixes-api.service';
import { EMPTY } from 'rxjs';
import { Store } from '@ngrx/store';
import * as CoreSelectors from 'src/app/core/store/core.selectors';
import { ConsumsApiService } from '../api/consums-api.service';
import { IngressosApiService } from '../api/ingressos-api.service';
import { MastersApiService } from '../api/master-api.service';
import { AuthApiService } from 'src/app/containers/auth/api/auth-api.service';
import { AlimentacionsApiService } from '../api/alimentacions-api.service';
import { AuthService } from 'src/app/containers/auth/services/auth.service';


@Injectable()
export class CoreEffects {

    constructor(
        private actions$: Actions,
        private despesesFixesApi: DespesesFixesApiService,
        private ingressosApi: IngressosApiService,
        private consumsApi: ConsumsApiService,
        private alimentacionsApi: AlimentacionsApiService,
        private mastersApi: MastersApiService,
        private authApi: AuthApiService,
        private auth: AuthService,
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

    requestAlimentacions$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.REQUEST_ALIMENTACIONS),
        withLatestFrom(this.store.select(CoreSelectors.selectMainFilter)),
        mergeMap(([action, filter]) => this.alimentacionsApi.findAll(filter)
            .pipe(
                map(alimentacions => ({ type: ActionTypes.SET_ALIMENTACIONS, payload: alimentacions })),
                catchError(() => EMPTY)
            ))
    ));

    requestTipusAlimentacio$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.REQUEST_MASTERS, ActionTypes.REQUEST_TIPUS_ALIMENTACIO),
        mergeMap((action) => this.mastersApi.findTipusAlimentacio()
            .pipe(
                map(tipusAlimentacions => ({ type: ActionTypes.SET_TIPUS_ALIMENTACIO, payload: tipusAlimentacions })),
                catchError(() => EMPTY)
            ))
    ));

    requestTipusConsum$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.REQUEST_MASTERS, ActionTypes.REQUEST_TIPUS_CONSUM),
        mergeMap((action) => this.mastersApi.findTipusConsums()
            .pipe(
                map(tipusConsums => ({ type: ActionTypes.SET_TIPUS_CONSUM, payload: tipusConsums })),
                catchError(() => EMPTY)
            ))
    ));

    requestLogin$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.REQUEST_LOGIN),
        mergeMap((action: { payload: { username: string, password: string } }) => this.authApi.login(action.payload.username, action.payload.password)
            .pipe(
                map((response: { access_token: string }) => response.access_token),
                tap(token => this.auth.storeToken(token)),
                switchMap(token => [
                    { type: ActionTypes.SET_TOKEN, payload: token },
                    { type: ActionTypes.LOGIN_SUCCESS, payload: token },
                ]),
                catchError(() => EMPTY)
            ))
    ));

    initiateTokenFromStorage$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.INITIATE_TOKEN_FROM_STORAGE),
        tap(() => this.store.dispatch(CoreActions.loginSuccess())),
        map(action => ({ type: ActionTypes.SET_TOKEN, payload: this.auth.retriveToken() }))
    ));

    initState$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.LOGIN_SUCCESS),
        switchMap(() => [
            CoreActions.requestDespesesFixes(),
            CoreActions.requestIngressos(),
            CoreActions.requestConsums(),
            CoreActions.requestAlimentacions(),
            CoreActions.requestMasters()
        ]
        )
    ));

}
