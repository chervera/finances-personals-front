import { createReducer, on, State } from '@ngrx/store';
import * as Actions from './alimentacions.actions';
import { Alimentacio } from 'src/app/core/model/alimentacio.model';

export interface AlimentacionsState {
    alimentacio: Alimentacio
}

export const initialState = {
    alimentacio: null
};

export const alimentacionsKey = 'alimentacions';

const _reducer = createReducer(initialState,
    on(Actions.setAlimentacio, (state, action) =>
        ({ ...state, alimentacio: action.payload })
    ),
    on(Actions.createAlimentacio, (state, action) =>
        ({ ...state, alimentacio: {} })
    )
);

export function reducer(state, action) {
    return _reducer(state, action);
}