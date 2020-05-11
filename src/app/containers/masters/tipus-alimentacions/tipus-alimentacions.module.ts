import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipusAlimentacionsListComponent } from './components/tipus-alimentacions-list/tipus-alimentacions-list.component';
import { FormTipusAlimentacionsComponent } from './components/form-tipus-alimentacions/form-tipus-alimentacions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TipusAlimentacionsEffects } from './store/tipus-alimentacions.effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    TipusAlimentacionsListComponent,
    FormTipusAlimentacionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([TipusAlimentacionsEffects]),
  ],
  exports: [
    TipusAlimentacionsListComponent,
    FormTipusAlimentacionsComponent
  ]
})
export class TipusAlimentacionsModule { }
