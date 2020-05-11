import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DateService } from 'src/app/core/services/date.service';
import { Resum, ResumLine } from 'src/app/core/model/resum.model';
import { TipusAlimentacio } from 'src/app/core/model/tipus-alimentacio.model';
import { Chart } from 'src/app/core/components/chart';


@Component({
  selector: 'app-alimentacions-line-chart',
  templateUrl: './alimentacions-line-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlimentacionsLineChartComponent extends Chart implements OnInit, OnChanges {

  @Input() resum: Resum<TipusAlimentacio>;

  readonly Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

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
    this.chartOptions = {
      title: null,
      xAxis: {
        categories: DateService.generateMonthText()
      },
      yAxis: {
        min: 0,
        title: {
          text: ''
        },
        labels: {
          formatter: function () {
            return this.value + ' €';
          }
        },
      },
      series: this.generateSeriesFromResum(resum),
      tooltip: {
        pointFormatter: function () {
          return this.y.toFixed(2) + '€';
        }
      }
    };
  }

  private generateSeriesFromResum(resum: Resum<TipusAlimentacio>) {
    const series = [];
    resum.types.forEach((tipus: TipusAlimentacio) => {
      const serie = {
        data: [],
        type: this.SERIE_TYPE_LINE,
        name: tipus.descripcio
      }
      resum.lines.forEach((line: ResumLine) => {
        serie.data.push(line.totals.get(tipus.id).totalAmount);
      });
      series.push(serie);
    });

    return series;
  }

}
