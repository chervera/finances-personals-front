import { createReducer, on, State } from '@ngrx/store';
import * as CoreActions from './core.actions';
import { DespesaFixa } from '../model/despesa-fixa.model';
import { Filter } from 'src/app/shared/filter/filter.model';
import { Ingres } from '../model/ingres.model';
import { DespesaConsum } from '../model/despesa-consum.model';
import { DespesaAlimentacio } from '../model/despesa-alimentacio.model';

export interface AppState {
    core: CoreState,
}

export interface CoreState {
    uiState: UiState;
    mainFilter: Filter;
    despesesFixes?: DespesaFixa[];
    ingressos?: Ingres[];
    consums?: DespesaConsum[];
    alimentacions?: DespesaAlimentacio[];
}

export interface UiState {
    isMenuShowed: boolean;
}

export const initialState = {
    uiState: {
        isMenuShowed: false
    },
    mainFilter: {
        year: new Date().getFullYear(),
    }
};

const _coreReducer = createReducer(initialState,
    on(CoreActions.toggleIsMenuShowed, (state, action) =>
        ({ ...state, uiState: { ...state.uiState, isMenuShowed: !state.uiState.isMenuShowed } })
    ),
    on(CoreActions.setMainFilter, (state, action) =>
        ({ ...state, mainFilter: action.payload })
    ),
    on(CoreActions.setDespesesFixes, (state, action) =>
        ({ ...state, despesesFixes: action.payload })
    ),
    on(CoreActions.setIngressos, (state, action) =>
        ({ ...state, ingressos: action.payload })
    ),
    on(CoreActions.setConsums, (state, action) =>
        ({ ...state, consums: action.payload })
    ),
    on(CoreActions.setAlimentacio, (state, action) =>
        ({ ...state, alimentacions: action.payload })
    ),
);

export function reducer(state, action) {
    return _coreReducer(state, action);
}