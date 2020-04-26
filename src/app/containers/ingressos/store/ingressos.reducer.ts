import { createReducer, on, State } from '@ngrx/store';
import * as Actions from './ingressos.actions';
import { Ingres } from 'src/app/core/model/ingres.model';

export interface IngressosState {
    ingres: Ingres
}

export const initialState = {
    ingres: null
};

export const ingressosKey = 'ingressos';

const _reducer = createReducer(initialState,
    on(Actions.setIngres, (state, action) =>
        ({ ...state, ingres: action.payload })
    ),
    on(Actions.createIngres, (state, action) =>
        ({ ...state, ingres: {} })
    )
);

export function reducer(state, action) {
    return _reducer(state, action);
}