import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as reducer from './despeses-fixes.reducer';
import { AppState } from 'src/app/core/store/core.reducer';
import { DespesesFixesState } from './despeses-fixes.reducer';

export const selectDespesesFixes = createFeatureSelector<DespesesFixesState>(reducer.despesesFixesKey);

export const selectDespesaFixa = createSelector(
    selectDespesesFixes,
    (state: DespesesFixesState) => state.despesaFixa
)


