import { Injectable } from '@angular/core';
import { Resum, ResumLine, ResumStat, ResumValue } from 'src/app/core/model/resum.model';
import { TipusConsum } from 'src/app/core/model/tipus-consum.model';
import { Consum } from 'src/app/core/model/consum.model';
import { DateService } from 'src/app/core/services/date.service';

@Injectable({
  providedIn: 'root'
})
export class ConsumsService {

  constructor() { }

  public static generateResumLines(consums: Consum[], tipusConsums: TipusConsum[]): Resum<TipusConsum> {
    const resum: Resum<TipusConsum> = new Resum();
    resum.types = tipusConsums;
    resum.lines = ConsumsService.initializeResumLines(tipusConsums);

    consums.forEach(consum => {
      const month = consum.data.getMonth();
      const totalAmount = resum.lines[month].totals.get(consum.tipusConsumId).totalAmount + +consum.import;
      const count = resum.lines[month].totals.get(consum.tipusConsumId).itemCount;
      resum.lines[month].totals.set(consum.tipusConsumId, { totalAmount, itemCount: count + 1 });
    });

    resum.stats = ConsumsService.generateStats(resum);
    console.log(resum);
    return resum;
  }

  private static initializeResumLines(tipusConsums: TipusConsum[]) {
    const result: ResumLine[] = [];
    DateService.generateMonthText().forEach(month => {
      const line = new ResumLine(month);
      tipusConsums.forEach(tipusConsum => {
        line.totals.set(tipusConsum.id, new ResumValue());
      });
      result.push(line);
    });

    return result;
  }

  private static generateStats(resum: Resum<TipusConsum>) {
    const stats = new Map<number, ResumStat>();
    const currentMonth = new Date().getMonth();

    resum.types.forEach((type) => {
      [...resum.lines].splice(0, currentMonth).forEach((line) => {
        const total = line.totals.get(type.id);
        const stat = stats.get(type.id) || new ResumStat();
        stat.total += total.totalAmount;
        stat.totalAverage += total.totalAmount;
        stats.set(type.id, stat);
      })

      const stat = stats.get(type.id);
      stat.totalAverage = stat.totalAverage / currentMonth;

    });

    return stats;
  }
}
