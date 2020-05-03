export class Resum<T> {
    types: T[];
    lines: ResumLine[];
    stats: Map<number, ResumStat>;

}

export class ResumLine {
    month: string;
    totals = new Map<number, ResumValue>();
    constructor(month: string) {
        this.month = month;
    }
}

export class ResumValue {
    totalAmount = 0;
    itemCount = 0;
}

export class ResumStat {
    totalAverage = 0;
    total = 0;
    averageItem = 0;
    itemCount = 0;

}