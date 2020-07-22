import { createAction, props } from '@ngrx/store';
import { DespesaFixa } from '../model/despesa-fixa.model';
import { Filter } from 'src/app/shared/filter/filter.model';
import { Ingres } from '../model/ingres.model';
import { Consum } from '../model/consum.model';
import { Alimentacio } from '../model/alimentacio.model';
import { TipusAlimentacio } from '../model/tipus-alimentacio.model';
import { TipusConsum } from '../model/tipus-consum.model';
import { User } from '../model/user.model';

export enum ActionTypes {
    TOGGLE_IS_MENU_SHOWED = `[CORE] Toggle isMenuShowed`,
    SET_MAIN_FILTER = `[CORE] Set main filter`,
    REQUEST_DESPESES_FIXES = `[CORE] Request despeses fixes`,
    SET_DESPESES_FIXES = `[CORE] Set despeses fixes`,
    REQUEST_INGRESSOS = `[CORE] Request ingressos`,
    SET_INGRESSOS = `[CORE] Set ingressos`,
    REQUEST_CONSUMS = `[CORE] Request consums`,
    SET_CONSUMS = `[CORE] Set consums`,
    REQUEST_ALIMENTACIONS = `[CORE] Request alimentacions`,
    SET_ALIMENTACIONS = `[CORE] Set alimentacions`,
    REQUEST_MASTERS = `[CORE] Request masters`,
    REQUEST_TIPUS_ALIMENTACIO = `[CORE] Request tipus alimentació`,
    SET_TIPUS_ALIMENTACIO = `[CORE] Set tipus alimentació`,
    REQUEST_TIPUS_CONSUM = `[CORE] Request tipus consum`,
    SET_TIPUS_CONSUM = `[CORE] Set tipus consum`,
    REQUEST_LOGIN = `[CORE] Request login`,
    LOGIN_SUCCESS = `[CORE] Login success`,
    REQUEST_PROFILE = `[CORE] Request profile`,
    REQUEST_UPDATE_PROFILE = `[CORE] Request update profile`,
    UPDATE_PROFILE_SUCCESS = `[CORE] Profile update success`,
    SET_PROFILE = `[CORE] Set profile`,
    SET_TOKEN = `[CORE] Set token`,
    REQUEST_LOGOUT = `[CORE] Request logout`,
    INITIATE_TOKEN_FROM_STORAGE = `[CORE] Initiate token from storage`,
    CLEAR_STATE = `[CORE] Clear state`
}

export const toggleIsMenuShowed = createAction(ActionTypes.TOGGLE_IS_MENU_SHOWED);
export const setMainFilter = createAction(ActionTypes.SET_MAIN_FILTER, props<{ payload: Filter }>());
export const requestDespesesFixes = createAction(ActionTypes.REQUEST_DESPESES_FIXES);
export const setDespesesFixes = createAction(ActionTypes.SET_DESPESES_FIXES, props<{ payload: DespesaFixa[] }>());
export const requestIngressos = createAction(ActionTypes.REQUEST_INGRESSOS);
export const setIngressos = createAction(ActionTypes.SET_INGRESSOS, props<{ payload: Ingres[] }>());
export const requestConsums = createAction(ActionTypes.REQUEST_CONSUMS);
export const setConsums = createAction(ActionTypes.SET_CONSUMS, props<{ payload: Consum[] }>());
export const requestAlimentacions = createAction(ActionTypes.REQUEST_ALIMENTACIONS);
export const setAlimentacions = createAction(ActionTypes.SET_ALIMENTACIONS, props<{ payload: Alimentacio[] }>());
export const requestMasters = createAction(ActionTypes.REQUEST_MASTERS);
export const requestTipusAlimentacio = createAction(ActionTypes.REQUEST_TIPUS_ALIMENTACIO);
export const setTipusAlimentacio = createAction(ActionTypes.SET_TIPUS_ALIMENTACIO, props<{ payload: TipusAlimentacio[] }>());
export const requestTipusConsum = createAction(ActionTypes.REQUEST_TIPUS_CONSUM);
export const setTipusConsum = createAction(ActionTypes.SET_TIPUS_CONSUM, props<{ payload: TipusConsum[] }>());
export const requestLogin = createAction(ActionTypes.REQUEST_LOGIN, props<{ payload: { username: string, password: string } }>());
export const requestProfile = createAction(ActionTypes.REQUEST_PROFILE);
export const requestUpdateProfile = createAction(ActionTypes.REQUEST_UPDATE_PROFILE, props<{ payload: User }>());
export const updateProfileSucces = createAction(ActionTypes.UPDATE_PROFILE_SUCCESS);
export const setProfile = createAction(ActionTypes.SET_PROFILE, props<{ payload: User }>());
export const setToken = createAction(ActionTypes.SET_TOKEN, props<{ payload: string }>());
export const requestLogout = createAction(ActionTypes.REQUEST_LOGOUT);
export const loginSuccess = createAction(ActionTypes.LOGIN_SUCCESS);
export const initiateTokenFromStorage = createAction(ActionTypes.INITIATE_TOKEN_FROM_STORAGE);
export const clearState = createAction(ActionTypes.CLEAR_STATE);


