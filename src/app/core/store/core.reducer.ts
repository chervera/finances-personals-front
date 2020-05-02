import { createReducer, on } from '@ngrx/store';
import * as CoreActions from './core.actions';
import { DespesaFixa } from '../model/despesa-fixa.model';
import { Filter } from 'src/app/shared/filter/filter.model';
import { Ingres } from '../model/ingres.model';
import { Consum } from '../model/consum.model';
import { Alimentacio } from '../model/alimentacio.model';
import { TipusConsum } from '../model/tipus-consum.model';
import { TipusAlimentacio } from '../model/tipus-alimentacio.model';
import { User } from '../model/user.model';

export interface AppState {
    core: CoreState;
}

export interface CoreState {
    auth: AuthState;
    ui: UiState;
    mainFilter: Filter;
    despesesFixes?: DespesaFixa[];
    ingressos?: Ingres[];
    consums?: Consum[];
    alimentacions?: Alimentacio[];
    masters: MastersState;
}

export interface UiState {
    isMenuShowed: boolean;
}

export interface AuthState {
    user: User;
    token: string;
}

export interface MastersState {
    tipusAlimentacions?: TipusAlimentacio[];
    tipusConsums?: TipusConsum[];
}

export const initialState = {
    ui: {
        isMenuShowed: false
    },
    mainFilter: {
        year: new Date().getFullYear(),
    },
    masters: {},
    auth: {}
};

const _coreReducer = createReducer(initialState,
    on(CoreActions.toggleIsMenuShowed, (state, action) =>
        ({ ...state, ui: { ...state.ui, isMenuShowed: !state.ui.isMenuShowed } })
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
    on(CoreActions.setAlimentacions, (state, action) =>
        ({ ...state, alimentacions: action.payload })
    ),
    on(CoreActions.setTipusAlimentacio, (state, action) =>
        ({ ...state, masters: { ...state.masters, tipusAlimentacions: action.payload } })
    ),
    on(CoreActions.setTipusConsum, (state, action) =>
        ({ ...state, masters: { ...state.masters, tipusConsums: action.payload } })
    ),
    on(CoreActions.setToken, (state, action) =>
        ({ ...state, auth: { ...state.auth, token: action.payload } })
    ),
    on(CoreActions.setUser, (state, action) =>
        ({ ...state, auth: { ...state.auth, user: action.payload } })
    ),
    on(CoreActions.clearState, (state, action) =>
        (initialState)
    ),
);

export function reducer(state, action) {
    return _coreReducer(state, action);
}