import { Injectable } from '@angular/core';
import { Resum, ResumLine, ResumStat, ResumValue, ResumWithDefaultType } from 'src/app/core/model/resum.model';
import { TipusConsum } from 'src/app/core/model/tipus-consum.model';
import { Consum } from 'src/app/core/model/consum.model';
import { DateService } from 'src/app/core/services/date.service';
import { TipusIngres } from 'src/app/core/model/tipus-ingres.model';
import { Ingres } from 'src/app/core/model/ingres.model';

@Injectable({
  providedIn: 'root'
})
export class IngressosService {

  constructor() { }

  public static generateResumLines(ingressos: Ingres[]): ResumWithDefaultType {
    const resum: ResumWithDefaultType = new ResumWithDefaultType();
    resum.lines = IngressosService.initializeResumLines();
    ingressos.forEach(ingres => {
      const month = ingres.data.getMonth();
      const totalAmount = resum.lines[month].totals.get(0).totalAmount + +ingres.import;
      const count = resum.lines[month].totals.get(0).itemCount;
      resum.lines[month].totals.set(0, { totalAmount, itemCount: count + 1 });
    });

    resum.stats = IngressosService.generateStats(resum);
    return resum;
  }

  private static initializeResumLines() {
    const result: ResumLine[] = [];
    DateService.generateMonthText(new Date().getMonth() + 1).forEach(month => {
      const line = new ResumLine(month);
      line.totals.set(0, new ResumValue());
      result.push(line);
    });

    return result;
  }

  private static generateStats(resum: ResumWithDefaultType) {
    const stats = new Map<number, ResumStat>();
    const currentMonth = new Date().getMonth();


    [...resum.lines].splice(0, currentMonth).forEach((line) => {
      const total = line.totals.get(0);
      const stat = stats.get(0) || new ResumStat();
      stat.total += total.totalAmount;
      stat.totalAverage += total.totalAmount;
      stats.set(0, stat);
    })

    const stat = stats.get(0);
    stat.totalAverage = stat.totalAverage / currentMonth;

    return stats;
  }
}
