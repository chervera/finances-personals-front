import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainer } from './dashboard.container';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResumComponent } from './components/resum/resum.component';
import { ResumDespesesIngresosAreaComponent } from './components/resum-despeses-ingresos-area/resum-despeses-ingresos-area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ResumDespesesLineComponent } from './components/resum-despeses-line/resum-despeses-line.component';


@NgModule({
  declarations: [DashboardContainer, ResumComponent, ResumDespesesIngresosAreaComponent, ResumDespesesLineComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HighchartsChartModule
  ]
})
export class DashboardModule { }
