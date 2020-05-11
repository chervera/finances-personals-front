import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { MastersContainer } from './masters.container';
import { TipusAlimentacionsModule } from './tipus-alimentacions/tipus-alimentacions.module';
import { TipusConsumsModule } from './tipus-consums/tipus-consums.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MastersContainer
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,
    TipusAlimentacionsModule,
    TipusConsumsModule
  ]
})
export class MastersModule { }
