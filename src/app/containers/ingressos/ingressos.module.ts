import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HighchartsChartModule } from 'highcharts-angular';
import { IngressosContainer } from './ingressos.container';
import { IngressosRoutingModule } from './ingressos-routing.module';
import * as reducer from './store/ingressos.reducer';
import { IngressosEffects } from './store/ingressos.effects';
import { IngressosListComponent } from './components/ingressos-list/ingressos-list.component';
import { IngressosLineChartComponent } from './components/ingressos-line-chart/ingressos-line-chart.component';



@NgModule({
  declarations: [
    IngressosContainer,
    IngressosListComponent,
    IngressosLineChartComponent
  ],
  imports: [
    CommonModule,
    IngressosRoutingModule,
    SharedModule,
    StoreModule.forFeature(reducer.ingressosKey, reducer.reducer),
    EffectsModule.forFeature([IngressosEffects]),
    HighchartsChartModule
  ]
})
export class IngressosModule { }
