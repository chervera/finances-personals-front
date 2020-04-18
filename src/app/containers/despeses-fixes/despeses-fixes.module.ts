import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesesFixesRoutingModule } from './despeses-fixes-routing.module';
import { DespesesFixesContainer } from './despeses-fixes.container';


@NgModule({
  declarations: [DespesesFixesContainer],
  imports: [
    CommonModule,
    DespesesFixesRoutingModule
  ]
})
export class DespesesFixesModule { }
