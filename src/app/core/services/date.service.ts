import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  public static generateMonthNumbers(): number[] {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  public static generateMonthText(max = 12): string[] {
    return ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'].slice(0, max);
  }

  public static generateYearNumbers(): number[] {
    return [2020, 2019];
  }
}
