import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { DespesaFixa } from 'src/app/core/model/despesa-fixa.model';
import * as Highcharts from 'highcharts';
import { DateService } from 'src/app/core/services/date.service';


@Component({
  selector: 'app-despeses-fixes-line-chart',
  templateUrl: './despeses-fixes-line-chart.component.html',
  styleUrls: ['./despeses-fixes-line-chart.component.scss']
})
export class DespesesFixesLineChartComponent implements OnInit, OnChanges {

  @Input() despesesFixes: DespesaFixa[];

  readonly Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if (this.despesesFixes) {
      this.constructChart(this.despesesFixes);
    }
  }

  private constructChart(despesesFixes: DespesaFixa[]) {
    this.chartOptions = {
      title: null,
      xAxis: {
        categories: DateService.generateMonthText()
      },
      yAxis: {
        min: 0
      },
      series: [{
        data: this.generateDataFromDespesesFixes(despesesFixes),
        type: 'line',
        name: 'Despeses fixes'
      }]

    };
  }

  private generateDataFromDespesesFixes(despesesFixes: DespesaFixa[]): number[] {
    const initialMonths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    return despesesFixes.reduce((months, despesaFixa: DespesaFixa) => {
      const initMonth = despesaFixa.mesInici || 1;
      const endMonth = despesaFixa.mesFi || 12;
      for (let i = initMonth; i <= endMonth; i++) {
        months[i - 1] = months[i - 1] + +despesaFixa.import;
      }
      return months;
    }, initialMonths);
  }

}
