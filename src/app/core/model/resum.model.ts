export class Resum<T> {
    types: T[];
    lines: ResumLine[];
    stats: Map<number, ResumStat>;
}

export class ResumWithDefaultType {
    lines: ResumLine[];
    stats: Map<number, ResumStat>;
}

export class ResumLine {
    month: string;
    totals = new Map<number, ResumValue>();

    constructor(month: string) {
        this.month = month;
    }

    get total(): number {
        let total = 0;
        this.totals.forEach((resumValue: ResumValue) => total += resumValue.totalAmount);
        return total;
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