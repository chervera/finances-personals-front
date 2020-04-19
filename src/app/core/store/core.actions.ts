import { createAction, props } from '@ngrx/store';
import { DespesaFixa } from '../model/despesa-fixa.model';

export enum ActionTypes {
    REQUEST_DESPESES_FIXES = `[CORE] Request despeses fixes`,
    SET_DESPESES_FIXES = `[CORE] Set despeses fixes`,
    TOGGLE_IS_MENU_SHOWED = `[CORE] Toggle isMenuShowed`,
}

export const requestDespesesFixes = createAction(ActionTypes.REQUEST_DESPESES_FIXES);
export const setDespesesFixes = createAction(ActionTypes.SET_DESPESES_FIXES, props<{ payload: DespesaFixa[] }>());
export const toggleIsMenuShowed = createAction(ActionTypes.TOGGLE_IS_MENU_SHOWED);

