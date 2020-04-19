import { createReducer, on, State } from '@ngrx/store';
import * as CoreActions from './core.actions';
import { DespesaFixa } from '../model/despesa-fixa.model';

export interface AppState {
    core: CoreState,
}

export interface CoreState {
    uiState: UiState;
    despesesFixes?: DespesaFixa[]
}

export interface UiState {
    isMenuShowed: boolean;
}

export const initialState = {
    uiState: {
        isMenuShowed: false
    }
};

const _coreReducer = createReducer(initialState,
    on(CoreActions.setDespesesFixes, (state, action) =>
        ({ ...state, despesesFixes: action.payload })
    ),
    on(CoreActions.toggleIsMenuShowed, (state, action) =>
        ({ ...state, uiState: { ...state.uiState, isMenuShowed: !state.uiState.isMenuShowed } })
    )
);

export function reducer(state, action) {
    return _coreReducer(state, action);
}