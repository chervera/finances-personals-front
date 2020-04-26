import { createAction, props } from '@ngrx/store';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';

export enum ActionTypes {
    REQUEST_DESPESA_FIXA = `[DESPESES FIXES] Request despesa fixa`,
    SET_DESPESA_FIXA = `[DESPESES FIXES] Set despesa fixa`,
    CREATE_DESPESA_FIXA = `[DESPESES FIXES] Create despesa fixa`,
    CREATE_DESPESA_FIXA_SUCCESS = `[DESPESES FIXES] Create despesa fixa success`,
    REQUEST_SAVE_DESPESA_FIXA = `[DESPESES FIXES] Request save despesa fixa`,
    REQUEST_UPDATE_DESPESA_FIXA = `[DESPESES FIXES] Request update despesa fixa`,
    UPDATE_DESPESA_FIXA_SUCCESS = `[DESPESES FIXES] Update despesa fixa success`,
    REQUEST_DELETE_DESPESA_FIXA = `[DESPESES FIXES] Request delete despesa fixa`,
    DELETE_DESPESA_FIXA_SUCCESS = `[DESPESES FIXES] Delete despesa fixa success`,
}

export const requestDespesaFixa = createAction(ActionTypes.REQUEST_DESPESA_FIXA, props<{ payload: string }>());
export const setDespesaFixa = createAction(ActionTypes.SET_DESPESA_FIXA, props<{ payload: DespesaFixa }>());
export const createDespesaFixa = createAction(ActionTypes.CREATE_DESPESA_FIXA);
export const createDespesaFixaSuccess = createAction(ActionTypes.CREATE_DESPESA_FIXA_SUCCESS);
export const requestSaveDespesaFixa = createAction(ActionTypes.REQUEST_SAVE_DESPESA_FIXA, props<{ payload: DespesaFixa }>());
export const requestUpdateDespesaFixa = createAction(ActionTypes.REQUEST_UPDATE_DESPESA_FIXA, props<{ payload: DespesaFixa }>());
export const updateDespesaFixaSuccess = createAction(ActionTypes.UPDATE_DESPESA_FIXA_SUCCESS);
export const requestDeleteDespesaFixa = createAction(ActionTypes.REQUEST_DELETE_DESPESA_FIXA, props<{ payload: number }>());
export const deleteDespesaFixaSuccess = createAction(ActionTypes.DELETE_DESPESA_FIXA_SUCCESS);


