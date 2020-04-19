import { createAction, props } from '@ngrx/store';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';

export enum ActionTypes {
    REQUEST_DESPESA_FIXA = `[DESPESES FIXES] Request despesa fixa`,
    SET_DESPESA_FIXA = `[DESPESES FIXES] Set despesa fixa`,
    CREATE_DESPESA_FIXA = `[DESPESES FIXES] Create despesa fixa`
}

export const requestDespesaFixa = createAction(ActionTypes.REQUEST_DESPESA_FIXA, props<{ payload: string }>());
export const setDespesaFixa = createAction(ActionTypes.SET_DESPESA_FIXA, props<{ payload: DespesaFixa }>());
export const createDespesaFixa = createAction(ActionTypes.CREATE_DESPESA_FIXA);


