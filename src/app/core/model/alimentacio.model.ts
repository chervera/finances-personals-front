import { TipusAlimentacio } from './tipus-alimentacio.model';

export interface Alimentacio {
    id: number;
    import: number;
    tipusAlimentacioId: number;
    tipusAlimentacio?: TipusAlimentacio
    data: Date;
}