import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesesFixesListComponent } from './components/despeses-fixes/despeses-fixes-list.component';
import { DespesesFixesLineChartComponent } from './components/despeses-fixes-line-chart/despeses-fixes-line-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';




@NgModule({
  declarations: [DespesesFixesListComponent, DespesesFixesLineChartComponent],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [DespesesFixesListComponent, DespesesFixesLineChartComponent]
})
export class DespesesFixesModule { }
