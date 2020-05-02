import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as reducer from './alimentacions.reducer';
import { AppState } from 'src/app/core/store/core.reducer';

export const selectAlimentacions = createFeatureSelector<reducer.AlimentacionsState>(reducer.alimentacionsKey);

export const selectAlimentacio = createSelector(
    selectAlimentacions,
    (state: reducer.AlimentacionsState) => state.alimentacio
)


