import { createAction, props } from '@ngrx/store';
import { Alimentacio } from 'src/app/core/model/alimentacio.model';

export enum ActionTypes {
    REQUEST_ALIMENTACIO = `[ALIMENTACIONS] Request alimentacio`,
    SET_ALIMENTACIO = `[ALIMENTACIONS] Set alimentacio`,
    CREATE_ALIMENTACIO = `[ALIMENTACIONS] Create alimentacio`,
    CREATE_ALIMENTACIO_SUCCESS = `[ALIMENTACIONS] Create alimentacio success`,
    REQUEST_SAVE_ALIMENTACIO = `[ALIMENTACIONS] Request save alimentacio`,
    REQUEST_UPDATE_ALIMENTACIO = `[ALIMENTACIONS] Request update alimentacio`,
    UPDATE_ALIMENTACIO_SUCCESS = `[ALIMENTACIONS] Update alimentacio success`,
    REQUEST_DELETE_ALIMENTACIO = `[ALIMENTACIONS] Request delete alimentacio`,
    DELETE_ALIMENTACIO_SUCCESS = `[ALIMENTACIONS] Delete alimentacio success`,
}

export const requestAlimentacio = createAction(ActionTypes.REQUEST_ALIMENTACIO, props<{ payload: string }>());
export const setAlimentacio = createAction(ActionTypes.SET_ALIMENTACIO, props<{ payload: Alimentacio }>());
export const createAlimentacio = createAction(ActionTypes.CREATE_ALIMENTACIO);
export const createAlimentacioSuccess = createAction(ActionTypes.CREATE_ALIMENTACIO_SUCCESS);
export const requestSaveAlimentacio = createAction(ActionTypes.REQUEST_SAVE_ALIMENTACIO, props<{ payload: Alimentacio }>());
export const requestUpdateAlimentacio = createAction(ActionTypes.REQUEST_UPDATE_ALIMENTACIO, props<{ payload: Alimentacio }>());
export const updateAlimentacioSuccess = createAction(ActionTypes.UPDATE_ALIMENTACIO_SUCCESS);
export const requestDeleteAlimentacio = createAction(ActionTypes.REQUEST_DELETE_ALIMENTACIO, props<{ payload: number }>());
export const deleteAlimentacioSuccess = createAction(ActionTypes.DELETE_ALIMENTACIO_SUCCESS);


