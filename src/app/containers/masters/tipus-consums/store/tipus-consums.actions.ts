import { createAction, props } from '@ngrx/store';
import { TipusConsum } from 'src/app/core/model/tipus-consum.model';

export enum ActionTypes {
    REQUEST_SAVE_TIPUS_CONSUM = `[CONSUMS] Request save tipus consum`,
    SAVE_TIPUS_CONSUM_SUCCESS = `[CONSUMS] Save tipus consum success`,
    REQUEST_DELETE_TIPUS_CONSUM = `[CONSUMS] Request delete tipus consum`,
    DELETE_TIPUS_CONSUM_SUCCESS = `[CONSUMS] Delete tipus consum success`,
}

export const requestSaveTipusConsum = createAction(ActionTypes.REQUEST_SAVE_TIPUS_CONSUM, props<{ payload: TipusConsum }>());
export const saveTipusConsumSuccess = createAction(ActionTypes.SAVE_TIPUS_CONSUM_SUCCESS);
export const requestDeleteTipusConsum = createAction(ActionTypes.REQUEST_DELETE_TIPUS_CONSUM, props<{ payload: number }>());
export const deleteTipusConsumSuccess = createAction(ActionTypes.DELETE_TIPUS_CONSUM_SUCCESS);


