import { Injectable } from '@angular/core';
import { Resum, ResumLine } from 'src/app/core/model/resum.model';
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
      const total = resum.lines[month].totals.get(alimentacio.tipusAlimentacioId) + +alimentacio.import;
      resum.lines[month].totals.set(alimentacio.tipusAlimentacioId, total);
    });
    return resum;
  }

  private static initializeResumLines(tipusAlimentacions: TipusAlimentacio[]) {
    const result: ResumLine[] = [];
    DateService.generateMonthText().forEach(month => {
      const line = ({ month, totals: new Map() });
      tipusAlimentacions.forEach(tipusAlimentacio => {
        line.totals.set(tipusAlimentacio.id, 0);
      });
      result.push(line);
    });



    return result;
  }
}
