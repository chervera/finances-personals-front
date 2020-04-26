import { createAction, props } from '@ngrx/store';
import { Ingres } from 'src/app/core/model/ingres.model';

export enum ActionTypes {
    REQUEST_INGRES = `[INGRESSOS] Request ingres`,
    SET_INGRES = `[INGRESSOS] Set ingres`,
    CREATE_INGRES = `[INGRESSOS] Create ingres`,
    CREATE_INGRES_SUCCESS = `[INGRESSOS] Create ingres success`,
    REQUEST_SAVE_INGRES = `[INGRESSOS] Request save ingres`,
    REQUEST_UPDATE_INGRES = `[INGRESSOS] Request update ingres`,
    UPDATE_INGRES_SUCCESS = `[INGRESSOS] Update ingres success`,
    REQUEST_DELETE_INGRES = `[INGRESSOS] Request delete ingres`,
    DELETE_INGRES_SUCCESS = `[INGRESSOS] Delete ingres success`,
}

export const requestIngres = createAction(ActionTypes.REQUEST_INGRES, props<{ payload: string }>());
export const setIngres = createAction(ActionTypes.SET_INGRES, props<{ payload: Ingres }>());
export const createIngres = createAction(ActionTypes.CREATE_INGRES);
export const createIngresSuccess = createAction(ActionTypes.CREATE_INGRES_SUCCESS);
export const requestSaveIngres = createAction(ActionTypes.REQUEST_SAVE_INGRES, props<{ payload: Ingres }>());
export const requestUpdateIngres = createAction(ActionTypes.REQUEST_UPDATE_INGRES, props<{ payload: Ingres }>());
export const updateIngresSuccess = createAction(ActionTypes.UPDATE_INGRES_SUCCESS);
export const requestDeleteIngres = createAction(ActionTypes.REQUEST_DELETE_INGRES, props<{ payload: number }>());
export const deleteIngresSuccess = createAction(ActionTypes.DELETE_INGRES_SUCCESS);


