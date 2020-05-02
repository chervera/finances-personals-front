import { Injectable } from '@angular/core';
import { Resum, ResumLine } from 'src/app/core/model/resum.model';
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
      const total = resum.lines[month].totals.get(consum.tipusConsumId) + +consum.import;
      resum.lines[month].totals.set(consum.tipusConsumId, total);
    });
    console.log(resum);
    return resum;
  }

  private static initializeResumLines(tipusConsums: TipusConsum[]) {
    const result: ResumLine[] = [];
    DateService.generateMonthText().forEach(month => {
      const line = ({ month, totals: new Map() });
      tipusConsums.forEach(tipusConsum => {
        line.totals.set(tipusConsum.id, 0);
      });
      result.push(line);
    });



    return result;
  }
}
