import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DateService } from 'src/app/core/services/date.service';
import { Resum, ResumLine } from 'src/app/core/model/resum.model';
import { TipusConsum } from 'src/app/core/model/tipus-consum.model';
import { Chart } from 'src/app/core/components/chart';


@Component({
  selector: 'app-consums-line-chart',
  templateUrl: './consums-line-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumsLineChartComponent extends Chart implements OnInit, OnChanges {

  @Input() resum: Resum<TipusConsum>;

  readonly Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.resum) {
      this.constructChart(this.resum);
    }
  }

  private constructChart(resum: Resum<TipusConsum>) {
    this.chartOptions = {
      title: null,
      xAxis: {
        categories: DateService.generateMonthText(new Date().getMonth() + 1)
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
        }
      },
      series: this.generateSeriesFromResum(resum)
    };
  }

  private generateSeriesFromResum(resum: Resum<TipusConsum>) {
    const series = [];
    resum.types.forEach((tipus: TipusConsum) => {
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
