import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DateService } from 'src/app/core/services/date.service';
import { Resum, ResumLine, ResumWithDefaultType } from 'src/app/core/model/resum.model';
import { TipusConsum } from 'src/app/core/model/tipus-consum.model';
import { Chart } from 'src/app/core/components/chart';


@Component({
  selector: 'app-ingressos-line-chart',
  templateUrl: './ingressos-line-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngressosLineChartComponent extends Chart implements OnInit, OnChanges {

  @Input() resum: ResumWithDefaultType;

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

  private constructChart(resum: ResumWithDefaultType) {
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
      series: this.generateSeriesFromResum(resum),
      tooltip: {
        pointFormatter: function () {
          return this.y.toFixed(2) + '€';
        }
      }
    };
  }

  private generateSeriesFromResum(resum: ResumWithDefaultType) {
    const series = [];
    const serie = {
      data: [],
      type: this.SERIE_TYPE_LINE,
      name: 'Ingressos'
    }

    resum.lines.forEach((line: ResumLine) => {
      serie.data.push(line.totals.get(0).totalAmount);
    });
    series.push(serie);

    return series;
  }


}
