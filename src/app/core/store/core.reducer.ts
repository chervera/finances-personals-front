import { createReducer, on, State } from '@ngrx/store';
import * as CoreActions from './core.actions';
import { DespesaFixa } from '../model/despesa-fixa.model';

export interface CoreState {
    despesesFixes?: DespesaFixa[]
}

export const initialState = {};

const _coreReducer = createReducer(initialState,
    on(CoreActions.setDespesesFixes, (state, action) => ({ ...state, despesesFixes: action.payload })
    )
);

export function reducer(state, action) {
    return _coreReducer(state, action);
}