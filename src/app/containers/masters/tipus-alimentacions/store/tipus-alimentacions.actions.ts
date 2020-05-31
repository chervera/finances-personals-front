import { createAction, props } from '@ngrx/store';
import { TipusAlimentacio } from 'src/app/core/model/tipus-alimentacio.model';

export enum ActionTypes {
    REQUEST_SAVE_TIPUS_ALIMENTACIO = `[ALIMENTACIONS] Request save tipus alimentacio`,
    SAVE_TIPUS_ALIMENTACIO_SUCCESS = `[ALIMENTACIONS] Save tipus alimentacio success`,
    REQUEST_DELETE_TIPUS_ALIMENTACIO = `[ALIMENTACIONS] Request delete tipus alimentacio`,
    DELETE_TIPUS_ALIMENTACIO_SUCCESS = `[ALIMENTACIONS] Delete tipus alimentacio success`,
}

export const requestSaveTipusAlimentacio = createAction(ActionTypes.REQUEST_SAVE_TIPUS_ALIMENTACIO, props<{ payload: TipusAlimentacio }>());
export const saveTipusAlimentacioSuccess = createAction(ActionTypes.SAVE_TIPUS_ALIMENTACIO_SUCCESS);
export const requestDeleteTipusAlimentacio = createAction(ActionTypes.REQUEST_DELETE_TIPUS_ALIMENTACIO, props<{ payload: number }>());
export const deleteTipusAlimentacioSuccess = createAction(ActionTypes.DELETE_TIPUS_ALIMENTACIO_SUCCESS);


