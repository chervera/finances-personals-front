export class Resum<T> {
    types: T[];
    lines: ResumLine[];
    totals: [number]
}

export interface ResumLine {
    month: string;
    totals: Map<number, any>
}