import { createSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { CoreState, UiState, AppState } from './core.reducer';

export const selectCore = (state: AppState) => state.core;

export const selectDespesesFixes = createSelector(
    selectCore,
    (state: CoreState) => state.despesesFixes
)

export const selectUi = createSelector(
    selectCore,
    (state: CoreState) => state.uiState
)

export const selectIsMenuShowed = createSelector(
    selectUi,
    (state: UiState) => state.isMenuShowed
)
