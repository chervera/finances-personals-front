import { createSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { CoreState, UiState, AppState } from './core.reducer';

export const selectCore = (state: AppState) => state.core;


export const selectUi = createSelector(
    selectCore,
    (state: CoreState) => state.uiState
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

export const selectConsums = createSelector(
    selectCore,
    (state: CoreState) => state.consums
)

export const selectAlimentacio = createSelector(
    selectCore,
    (state: CoreState) => state.alimentacions
)
