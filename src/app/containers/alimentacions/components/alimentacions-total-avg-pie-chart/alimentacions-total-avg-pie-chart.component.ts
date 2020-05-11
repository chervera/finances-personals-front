import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DateService } from 'src/app/core/services/date.service';
import { Resum, ResumLine, ResumStat } from 'src/app/core/model/resum.model';
import { TipusAlimentacio } from 'src/app/core/model/tipus-alimentacio.model';
import { Chart } from 'src/app/core/components/chart';


@Component({
  selector: 'app-alimentacions-total-avg-pie-chart',
  templateUrl: './alimentacions-total-avg-pie-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlimentacionsTotalAvgPieChartComponent extends Chart implements OnInit, OnChanges {

  @Input() resum: Resum<TipusAlimentacio>;

  readonly Highcharts: typeof Highcharts = Highcharts;

  chartOptionsTotal: Highcharts.Options;
  chartOptionsAverage: Highcharts.Options;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if (this.resum) {
      this.constructChart(this.resum);
    }
  }

  private constructChart(resum: Resum<TipusAlimentacio>) {
    this.chartOptionsTotal = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: this.SERIE_TYPE_PIE
      },
      title: {
        text: 'Total per comerç'
      },
      series: this.generateSeriesTotalFromResum(resum),
    };

    this.chartOptionsAverage = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: this.SERIE_TYPE_PIE
      },
      title: {
        text: 'Comanda mitja'
      },
      series: this.generateSeriesAverageFromResum(resum),
    };
  }

  private generateSeriesTotalFromResum(resum: Resum<TipusAlimentacio>) {
    const series = [];
    const data = [];
    resum.types.forEach((tipus: TipusAlimentacio) => {
      data.push({
        name: tipus.descripcio,
        y: resum.stats.get(tipus.id).total
      })
    });

    series.push({
      name: 'Alimentació',
      colorByPoint: true,
      data: data
    });

    return series;
  }

  private generateSeriesAverageFromResum(resum: Resum<TipusAlimentacio>) {
    const series = [];
    const data = [];
    resum.types.forEach((tipus: TipusAlimentacio) => {
      data.push({
        name: tipus.descripcio,
        y: resum.stats.get(tipus.id).averageItem
      })
    });

    series.push({
      name: 'Alimentació',
      colorByPoint: true,
      data: data
    });

    return series;
  }

}
