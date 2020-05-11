import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'src/app/core/components/chart';
import { Resum, ResumAnual } from 'src/app/core/services/resum.service';
import { DateService } from 'src/app/core/services/date.service';

@Component({
  selector: 'app-resum-despeses-line',
  templateUrl: './resum-despeses-line.component.html',
  styleUrls: ['./resum-despeses-line.component.scss']
})
export class ResumDespesesLineComponent extends Chart implements OnInit {

  @Input() resum: ResumAnual;

  readonly Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.resum) {
      this.constructChart(this.resum.resumsMensuals);
    }
  }

  private constructChart(resums: Resum[]) {
    this.chartOptions = {
      title: null,
      xAxis: {
        categories: DateService.generateMonthText(new Date().getMonth())
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
      series: [{
        data: this.generateDespesesFixesFromResums(resums),
        type: this.SERIE_TYPE_LINE,
        name: 'Despeses fixes',
        color: this.COLOR_DESPESES_FIXES
      }, {
        data: this.generateConsumsFromResums(resums),
        type: this.SERIE_TYPE_LINE,
        name: 'Consums',
        color: this.COLOR_CONSUMS
      }, {
        data: this.generateAlimentacioFromResums(resums),
        type: this.SERIE_TYPE_LINE,
        name: 'Alimentació',
        color: this.COLOR_ALIMENTACIONS
      }],
      tooltip: {
        pointFormatter: function () {
          return this.y.toFixed(2) + '€';
        }
      }

    };
  }

  private generateDespesesFixesFromResums(resums: Resum[]): number[] {
    return resums.map((resum: Resum) => resum.despesesFixes);
  }

  private generateConsumsFromResums(resums: Resum[]): number[] {
    return resums.map((resum: Resum) => resum.consums);
  }

  private generateAlimentacioFromResums(resums: Resum[]): number[] {
    return resums.map((resum: Resum) => resum.alimentacio);
  }

}
