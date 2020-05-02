import { TipusConsum } from './tipus-consum.model';

export interface Consum {
    id: number;
    tipusConsumId: number;
    tipusConsum?: TipusConsum
    import: number;
    data: Date;
}