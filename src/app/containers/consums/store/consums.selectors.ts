import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as reducer from './consums.reducer';
import { AppState } from 'src/app/core/store/core.reducer';

export const selectConsums = createFeatureSelector<reducer.ConsumsState>(reducer.consumsKey);

export const selectConsum = createSelector(
    selectConsums,
    (state: reducer.ConsumsState) => state.consum
)


