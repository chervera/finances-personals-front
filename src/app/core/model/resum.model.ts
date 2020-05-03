export class Resum<T> {
    types: T[];
    lines: ResumLine[];
    stats: Map<number, ResumStat>;

}

export interface ResumLine {
    month: string;
    totals: Map<number, any>
}

export class ResumStat {
    average: number = 0;
    total: number = 0;

}