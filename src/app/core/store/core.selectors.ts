import { createSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { CoreState, UiState, AppState, AuthState } from './core.reducer';

export const selectCore = (state: AppState) => state.core;


export const selectUi = createSelector(
    selectCore,
    (state: CoreState) => state.ui
)

export const selectAuth = createSelector(
    selectCore,
    (state: CoreState) => state.auth
)

export const selectIsMenuShowed = createSelector(
    selectUi,
    (state: UiState) => state.isMenuShowed
)

export const selectMainFilter = createSelector(
    selectCore,
    (state: CoreState) => state.mainFilter
)

export const selectDespesesFixes = createSelector(
    selectCore,
    (state: CoreState) => state.despesesFixes
)

export const selectIngressos = createSelector(
    selectCore,
    (state: CoreState) => state.ingressos
)

export const selectTipusConsums = createSelector(
    selectCore,
    (state: CoreState) => state.masters.tipusConsums
)

export const selectConsums = createSelector(
    selectCore,
    (state: CoreState) => state.consums
        .filter(consums => !!consums)
        .map((consum) => ({ ...consum, tipusConsum: state.masters.tipusConsums.find((tipusConsum) => tipusConsum.id == consum.tipusConsumId) }))
)

export const selectTipusAlimentacions = createSelector(
    selectCore,
    (state: CoreState) => state.masters.tipusAlimentacions
)

export const selectAlimentacions = createSelector(
    selectCore,
    (state: CoreState) => state.alimentacions
        .filter(alimentacions => !!alimentacions)
        .map((alimentacio) => ({ ...alimentacio, tipusAlimentacio: state.masters.tipusAlimentacions.find((tipusAlimentacio) => tipusAlimentacio.id == alimentacio.tipusAlimentacioId) }))
)

export const selectToken = createSelector(
    selectAuth,
    (state: AuthState) => state.token
)

export const selectUser = createSelector(
    selectAuth,
    (state: AuthState) => state.user
)


