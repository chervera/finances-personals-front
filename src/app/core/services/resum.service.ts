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

  static generateResum(ingressos: Ingres[], despesesFixes: DespesaFixa[], consums: Consum[], alimentacio: Alimentacio[]): ResumAnual {
    const resum = new ResumAnual();
    const months = DateService.generateMonthNumbers();
    const monthsText = DateService.generateMonthText();
    for (let i = 0; i < months.length; i++) {
      resum.resumsMensuals[i] = new Resum();
      resum.resumsMensuals[i].numberMonth = i + 1;
      resum.resumsMensuals[i].descriptionMonth = monthsText[i];
      resum.resumsMensuals[i].despesesFixes = this.generateDespesesFixesByMonth(despesesFixes, i);
      resum.resumsMensuals[i].ingressos = this.generateIngressosByMonth(ingressos, i);
      resum.resumsMensuals[i].consums = this.generateConsumsByMonth(consums, i);
      resum.resumsMensuals[i].alimentacio = this.generateAlimentacionsByMonth(alimentacio, i);
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

export class ResumAnual {
  resumsMensuals: Resum[];

  constructor() {
    this.resumsMensuals = [];
  }

  get totalDespesesFixes() {
    return this.resumsMensuals.reduce((total, resum) => total + resum.despesesFixes, 0);
  }

  get totalConsums() {
    return this.resumsMensuals.reduce((total, resum) => total + resum.consums, 0);
  }

  get totalAlimentacions() {
    return this.resumsMensuals.reduce((total, resum) => total + resum.alimentacio, 0);
  }

  get totalDespeses() {
    return this.resumsMensuals.reduce((total, resum) => total + resum.despesesTotals, 0);
  }

  get totalIngressos() {
    return this.resumsMensuals.reduce((total, resum) => total + resum.ingressos, 0);
  }

  get totalTotals() {
    return this.resumsMensuals.reduce((total, resum) => total + resum.total, 0);
  }

  get previsioDespeses() {
    const totalConsumsPevistos = this.mitjaConsumsMesActual * 12;
    const totalAlimentacionsPrevistes = this.mitjaAlimentacionsMesActual * 12;
    return this.totalDespesesFixes + totalConsumsPevistos + totalAlimentacionsPrevistes;
  }

  get previsioIngressos() {
    return this.mitjaIngressosMesActual * 12;
  }

  get previsioTotal() {
    return this.previsioIngressos - this.previsioDespeses;
  }

  get total() {
    return this.resumsMensuals.reduce((total, resum) => total + resum.total, 0);
  }

  get mitjaDespesesFixesMesActual() {
    const currentMonth = new Date().getMonth() + 1;
    return this.resumsMensuals.slice(0, currentMonth).reduce((total, resum) => total + resum.despesesFixes, 0) / currentMonth;
  }

  get mitjaDespesesFixes() {
    return this.resumsMensuals.reduce((total, resum) => total + resum.despesesFixes, 0) / 12;
  }

  get mitjaConsumsMesActual() {
    const currentMonth = new Date().getMonth() + 1;
    return this.resumsMensuals.slice(0, currentMonth).reduce((total, resum) => total + resum.consums, 0) / currentMonth;
  }

  get mitjaAlimentacionsMesActual() {
    const currentMonth = new Date().getMonth() + 1;
    return this.resumsMensuals.slice(0, currentMonth).reduce((total, resum) => total + resum.alimentacio, 0) / currentMonth;
  }

  get mitjaIngressosMesActual() {
    const currentMonth = new Date().getMonth() + 1;
    return this.resumsMensuals.slice(0, currentMonth).reduce((total, resum) => total + resum.ingressos, 0) / currentMonth;
  }

  get totalDespesesMesActual() {
    const currentMonth = new Date().getMonth() + 1;
    return this.resumsMensuals.slice(0, currentMonth).reduce((total, resum) => total + resum.despesesTotals, 0) / currentMonth;
  }

  get totalTotalsMesActual() {
    const currentMonth = new Date().getMonth() + 1;
    return this.resumsMensuals.slice(0, currentMonth).reduce((total, resum) => total + resum.total, 0) / currentMonth;
  }
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
    return this.ingressos - this.despesesTotals;
  }
}

