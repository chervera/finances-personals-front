import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as reducer from './ingressos.reducer';
import { AppState } from 'src/app/core/store/core.reducer';

export const selectIngressos = createFeatureSelector<reducer.IngressosState>(reducer.ingressosKey);

export const selectIngres = createSelector(
    selectIngressos,
    (state: reducer.IngressosState) => state.ingres
)


