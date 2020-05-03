import { Component, OnInit, Input } from '@angular/core';
import { Resum } from 'src/app/core/services/resum.service';
import * as Highcharts from 'highcharts';
import { DateService } from 'src/app/core/services/date.service';
import { Chart } from 'src/app/core/components/chart';

@Component({
  selector: 'app-resum-despeses-ingresos-area',
  templateUrl: './resum-despeses-ingresos-area.component.html',
  styleUrls: ['./resum-despeses-ingresos-area.component.scss']
})
export class ResumDespesesIngresosAreaComponent extends Chart implements OnInit {

  @Input() resums: Resum[];

  readonly Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.resums) {
      this.constructChart(this.resums);
    }
  }

  private constructChart(resums: Resum[]) {
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
        }
      },
      series: [{
        data: this.generateDespesesFromResums(resums),
        type: 'area',
        name: 'Despeses',
        color: this.COLOR_DESPESA
      }, {
        data: this.generateIngressosFromResums(resums),
        type: 'area',
        name: 'Ingressos',
        color: this.COLOR_INGRES
      }],
      tooltip: {
        pointFormatter: function () {
          return this.y.toFixed(2) + '€';
        }
      }
    };
  }

  private generateDespesesFromResums(resums: Resum[]): number[] {
    return resums.map((resum: Resum) => resum.despesesTotals);
  }

  private generateIngressosFromResums(resums: Resum[]): number[] {
    return resums.map((resum: Resum) => resum.ingressos);
  }


}
