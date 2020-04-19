import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesesFixesRoutingModule } from './despeses-fixes-routing.module';
import { DespesesFixesContainer } from './despeses-fixes.container';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as reducer from './store/despeses-fixes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DespesesFixesEffects } from './store/despeses-fixes.effects';



@NgModule({
  declarations: [DespesesFixesContainer],
  imports: [
    CommonModule,
    DespesesFixesRoutingModule,
    SharedModule,
    StoreModule.forFeature(reducer.despesesFixesKey, reducer.reducer),
    EffectsModule.forFeature([DespesesFixesEffects]),
  ]
})
export class DespesesFixesModule { }
