import { createSelector } from '@ngrx/store';
import { CoreState } from './core.reducer';

export interface AppState {
    core: CoreState
}

export const selectCore = (state: AppState) => state.core;

export const selectDespesesFixes = createSelector(
    selectCore,
    (state: CoreState) => state.despesesFixes
) 