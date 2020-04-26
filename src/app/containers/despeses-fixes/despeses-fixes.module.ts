import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesesFixesRoutingModule } from './despeses-fixes-routing.module';
import { DespesesFixesContainer } from './despeses-fixes.container';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as reducer from './store/despeses-fixes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DespesesFixesEffects } from './store/despeses-fixes.effects';
import { DespesesFixesListComponent } from './components/despeses-fixes-list/despeses-fixes-list.component';
import { DespesesFixesLineChartComponent } from './components/despeses-fixes-line-chart/despeses-fixes-line-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    DespesesFixesContainer,
    DespesesFixesListComponent,
    DespesesFixesLineChartComponent
  ],
  imports: [
    CommonModule,
    DespesesFixesRoutingModule,
    SharedModule,
    StoreModule.forFeature(reducer.despesesFixesKey, reducer.reducer),
    EffectsModule.forFeature([DespesesFixesEffects]),
    HighchartsChartModule
  ]
})
export class DespesesFixesModule { }
