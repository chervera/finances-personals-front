import { createReducer, on, State } from '@ngrx/store';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import * as Actions from './despeses-fixes.actions';

export interface DespesesFixesState {
    despesaFixa: DespesaFixa
}

export const initialState = {
    despesaFixa: null
};

export const despesesFixesKey = 'despeses-fixes';

const _reducer = createReducer(initialState,
    on(Actions.setDespesaFixa, (state, action) =>
        ({ ...state, despesaFixa: action.payload })
    ),
    on(Actions.createDespesaFixa, (state, action) =>
        ({ ...state, despesaFixa: {} })
    )
);

export function reducer(state, action) {
    return _reducer(state, action);
}