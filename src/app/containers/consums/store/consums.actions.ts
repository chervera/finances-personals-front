import { createAction, props } from '@ngrx/store';
import { Consum } from 'src/app/core/model/consum.model';

export enum ActionTypes {
    REQUEST_CONSUM = `[CONSUMS] Request consum`,
    SET_CONSUM = `[CONSUMS] Set consum`,
    CREATE_CONSUM = `[CONSUMS] Create consum`,
    CREATE_CONSUM_SUCCESS = `[CONSUMS] Create consum success`,
    REQUEST_SAVE_CONSUM = `[CONSUMS] Request save consum`,
    REQUEST_UPDATE_CONSUM = `[CONSUMS] Request update consum`,
    UPDATE_CONSUM_SUCCESS = `[CONSUMS] Update consum success`,
    REQUEST_DELETE_CONSUM = `[CONSUMS] Request delete consum`,
    DELETE_CONSUM_SUCCESS = `[CONSUMS] Delete consum success`,
}

export const requestConsum = createAction(ActionTypes.REQUEST_CONSUM, props<{ payload: string }>());
export const setConsum = createAction(ActionTypes.SET_CONSUM, props<{ payload: Consum }>());
export const createConsum = createAction(ActionTypes.CREATE_CONSUM);
export const createConsumSuccess = createAction(ActionTypes.CREATE_CONSUM_SUCCESS);
export const requestSaveConsum = createAction(ActionTypes.REQUEST_SAVE_CONSUM, props<{ payload: Consum }>());
export const requestUpdateConsum = createAction(ActionTypes.REQUEST_UPDATE_CONSUM, props<{ payload: Consum }>());
export const updateConsumSuccess = createAction(ActionTypes.UPDATE_CONSUM_SUCCESS);
export const requestDeleteConsum = createAction(ActionTypes.REQUEST_DELETE_CONSUM, props<{ payload: number }>());
export const deleteConsumSuccess = createAction(ActionTypes.DELETE_CONSUM_SUCCESS);


