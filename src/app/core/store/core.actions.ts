import { createAction, props } from '@ngrx/store';
import { DespesaFixa } from '../model/despesa-fixa.model';
import { Filter } from 'src/app/shared/filter/filter.model';
import { Ingres } from '../model/ingres.model';
import { DespesaConsum } from '../model/despesa-consum.model';
import { DespesaAlimentacio } from '../model/despesa-alimentacio.model';

export enum ActionTypes {
    TOGGLE_IS_MENU_SHOWED = `[CORE] Toggle isMenuShowed`,
    SET_MAIN_FILTER = `[CORE] Set main filter`,
    REQUEST_DESPESES_FIXES = `[CORE] Request despeses fixes`,
    SET_DESPESES_FIXES = `[CORE] Set despeses fixes`,
    REQUEST_INGRESSOS = `[CORE] Request ingressos`,
    SET_INGRESSOS = `[CORE] Set ingressos`,
    REQUEST_CONSUMS = `[CORE] Request consums`,
    SET_CONSUMS = `[CORE] Set consums`,
    REQUEST_ALIMENTACIO = `[CORE] Request alimentació`,
    SET_ALIMENTACIO = `[CORE] Set alimentació`,

}

export const toggleIsMenuShowed = createAction(ActionTypes.TOGGLE_IS_MENU_SHOWED);
export const setMainFilter = createAction(ActionTypes.SET_MAIN_FILTER, props<{ payload: Filter }>());
export const requestDespesesFixes = createAction(ActionTypes.REQUEST_DESPESES_FIXES);
export const setDespesesFixes = createAction(ActionTypes.SET_DESPESES_FIXES, props<{ payload: DespesaFixa[] }>());
export const requestIngressos = createAction(ActionTypes.REQUEST_INGRESSOS);
export const setIngressos = createAction(ActionTypes.SET_INGRESSOS, props<{ payload: Ingres[] }>());
export const requestConsums = createAction(ActionTypes.REQUEST_CONSUMS);
export const setConsums = createAction(ActionTypes.SET_CONSUMS, props<{ payload: DespesaConsum[] }>());
export const requestAlimentacio = createAction(ActionTypes.REQUEST_ALIMENTACIO);
export const setAlimentacio = createAction(ActionTypes.SET_ALIMENTACIO, props<{ payload: DespesaAlimentacio[] }>());


