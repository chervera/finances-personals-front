import { createReducer, on, State } from '@ngrx/store';
import * as Actions from './consums.actions';
import { Consum } from 'src/app/core/model/consum.model';

export interface ConsumsState {
    consum: Consum
}

export const initialState = {
    consum: null
};

export const consumsKey = 'consums';

const _reducer = createReducer(initialState,
    on(Actions.setConsum, (state, action) =>
        ({ ...state, consum: action.payload })
    ),
    on(Actions.createConsum, (state, action) =>
        ({ ...state, consum: {} })
    )
);

export function reducer(state, action) {
    return _reducer(state, action);
}