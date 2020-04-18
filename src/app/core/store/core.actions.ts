import { createAction, props } from '@ngrx/store';
import { DespesaFixa } from '../model/despesa-fixa.model';

export enum ActionTypes {
    REQUEST_DESPESES_FIXES = `[CORE] Request despeses fixes`,
    SET_DESPESES_FIXES = `[CORE] Set despeses fixes`,
}

export const requestDespesesFixes = createAction(ActionTypes.REQUEST_DESPESES_FIXES);
export const setDespesesFixes = createAction(ActionTypes.SET_DESPESES_FIXES, props<{ payload: DespesaFixa[] }>());

