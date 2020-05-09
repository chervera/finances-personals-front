import { Injectable } from '@angular/core';
import { Resum, ResumLine, ResumValue, ResumStat } from 'src/app/core/model/resum.model';
import { TipusAlimentacio } from 'src/app/core/model/tipus-alimentacio.model';
import { Alimentacio } from 'src/app/core/model/alimentacio.model';
import { DateService } from 'src/app/core/services/date.service';

@Injectable({
  providedIn: 'root'
})
export class AlimentacionsService {

  constructor() { }

  public static generateResumLines(alimentacions: Alimentacio[], tipusAlimentacions: TipusAlimentacio[]): Resum<TipusAlimentacio> {
    const resum: Resum<TipusAlimentacio> = new Resum();
    resum.types = tipusAlimentacions;
    resum.lines = AlimentacionsService.initializeResumLines(tipusAlimentacions);
    alimentacions.forEach(alimentacio => {
      const month = alimentacio.data.getMonth();
      const totalAmount = resum.lines[month].totals.get(alimentacio.tipusAlimentacioId).totalAmount + +alimentacio.import;
      const count = resum.lines[month].totals.get(alimentacio.tipusAlimentacioId).itemCount;
      resum.lines[month].totals.set(alimentacio.tipusAlimentacioId, { totalAmount, itemCount: count + 1 });
    });
    resum.stats = AlimentacionsService.generateStats(resum);
    return resum;
  }

  private static initializeResumLines(tipusAlimentacions: TipusAlimentacio[]) {
    const result: ResumLine[] = [];
    DateService.generateMonthText(new Date().getMonth() + 1).forEach(month => {
      const line = new ResumLine(month);
      tipusAlimentacions.forEach(tipusAlimentacio => {
        line.totals.set(tipusAlimentacio.id, new ResumValue());
      });
      result.push(line);
    });



    return result;
  }

  private static generateStats(resum: Resum<TipusAlimentacio>) {
    const stats = new Map<number, ResumStat>();
    const currentMonth = new Date().getMonth();

    resum.types.forEach((type) => {
      let totalItems = 0;
      [...resum.lines].splice(0, currentMonth).forEach((line) => {
        const total = line.totals.get(type.id);
        const stat = stats.get(type.id) || new ResumStat();
        stat.total += total.totalAmount;
        stat.totalAverage += total.totalAmount;
        totalItems += total.itemCount;
        stats.set(type.id, stat);
      })

      const stat = stats.get(type.id);
      stat.totalAverage = stat.totalAverage / currentMonth;
      stat.itemCount = totalItems;
      stat.averageItem = (stat.total / totalItems) || 0;

    });

    return stats;
  }
}
