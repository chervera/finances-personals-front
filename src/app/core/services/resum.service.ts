import { Injectable } from '@angular/core';
import { Ingres } from '../model/ingres.model';
import { DespesaFixa } from '../model/despesa-fixa.model';
import { Consum } from '../model/consum.model';
import { Alimentacio } from '../model/alimentacio.model';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class ResumService {

  constructor() { }

  static generateResum(ingressos: Ingres[], despesesFixes: DespesaFixa[], consums: Consum[], alimentacio: Alimentacio[]): Resum[] {
    const resum: Resum[] = [];
    const months = DateService.generateMonthNumbers();
    const monthsText = DateService.generateMonthText();
    for (let i = 0; i < months.length; i++) {
      resum[i] = new Resum();
      resum[i].descriptionMonth = monthsText[i];
      resum[i].despesesFixes = this.generateDespesesFixesByMonth(despesesFixes, i);
      resum[i].ingressos = this.generateIngressosByMonth(ingressos, i);
      resum[i].consums = this.generateConsumsByMonth(consums, i);
      resum[i].alimentacio = this.generateAlimentacionsByMonth(alimentacio, i);
    }
    return resum;
  }

  private static generateDespesesFixesByMonth(despesesFixes: DespesaFixa[], month: number): number {
    if (!despesesFixes) return 0;
    return despesesFixes.reduce((totalAmount, despesaFixa: DespesaFixa) => {
      if ((!despesaFixa.mesInici || despesaFixa.mesInici <= (month + 1)) && (!despesaFixa.mesFi || despesaFixa.mesFi >= (month + 1))) {
        totalAmount += +despesaFixa.import;
      }
      return totalAmount;
    }, 0);
  }

  private static generateIngressosByMonth(ingressos: Ingres[], month: number): number {
    if (!ingressos) return 0;
    return ingressos.reduce((totalAmount, ingres: Ingres) => {
      if ((ingres.data.getMonth() <= month) && (ingres.data.getMonth() >= month)) {
        totalAmount += +ingres.import;
      }
      return totalAmount;
    }, 0);

  }

  private static generateConsumsByMonth(consums: Consum[], month: number): number {
    if (!consums) return 0;
    return consums.reduce((totalAmount, consum: Consum) => {
      if ((consum.data.getMonth() <= month) && (consum.data.getMonth() >= month)) {
        totalAmount += +consum.import;
      }
      return totalAmount;
    }, 0);
  }

  private static generateAlimentacionsByMonth(alimentacions: Alimentacio[], month: number): number {
    if (!alimentacions) return 0;
    return alimentacions.reduce((totalAmount, alimentacio: Alimentacio) => {
      if ((alimentacio.data.getMonth() <= month) && (alimentacio.data.getMonth() >= month)) {
        totalAmount += +alimentacio.import;
      }
      return totalAmount;
    }, 0);
  }
}

export interface ResumAnual {
  resumsMensuals: Resum;
}

export class Resum {
  numberMonth: number;
  descriptionMonth: string;
  despesesFixes: number;
  consums: number;
  alimentacio: number;
  ingressos: number;

  get despesesTotals(): number {
    return this.despesesFixes + this.consums + this.alimentacio;
  }

  get total(): number {
    return this.ingressos - this.despesesFixes;
  }
}

