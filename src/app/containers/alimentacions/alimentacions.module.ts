import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HighchartsChartModule } from 'highcharts-angular';
import * as reducer from './store/alimentacions.reducer';
import { AlimentacionsRoutingModule } from './alimentacions-routing.module';
import { AlimentacionsContainer } from './alimentacions.container';
import { AlimentacionsListComponent } from './components/alimentacions-list/alimentacions-list.component';
import { AlimentacionsEffects } from './store/alimentacions.effects';
import { AlimentacionsResumComponent } from './components/alimentacions-resum/alimentacions-resum.component';
import { AlimentacionsLineChartComponent } from './components/alimentacions-line-chart/alimentacions-line-chart.component';



@NgModule({
  declarations: [
    AlimentacionsContainer,
    AlimentacionsListComponent,
    AlimentacionsResumComponent,
    AlimentacionsLineChartComponent
  ],
  imports: [
    CommonModule,
    AlimentacionsRoutingModule,
    SharedModule,
    StoreModule.forFeature(reducer.alimentacionsKey, reducer.reducer),
    EffectsModule.forFeature([AlimentacionsEffects]),
    HighchartsChartModule
  ]
})
export class AlimentacionsModule { }
