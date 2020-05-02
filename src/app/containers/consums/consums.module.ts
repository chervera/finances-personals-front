import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HighchartsChartModule } from 'highcharts-angular';
import * as reducer from './store/consums.reducer';
import { ConsumsRoutingModule } from './consums-routing.module';
import { ConsumsContainer } from './consums.container';
import { ConsumsListComponent } from './components/consums-list/consums-list.component';
import { ConsumsEffects } from './store/consums.effects';
import { ConsumsLineChartComponent } from './components/consums-line-chart/consums-line-chart.component';
import { ConsumsResumComponent } from './components/consums-resum/consums-resum.component';


@NgModule({
  declarations: [
    ConsumsContainer,
    ConsumsListComponent,
    ConsumsLineChartComponent,
    ConsumsResumComponent
  ],
  imports: [
    CommonModule,
    ConsumsRoutingModule,
    SharedModule,
    StoreModule.forFeature(reducer.consumsKey, reducer.reducer),
    EffectsModule.forFeature([ConsumsEffects]),
    HighchartsChartModule
  ]
})
export class ConsumsModule { }
