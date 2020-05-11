import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipusConsumsListComponent } from './components/tipus-consums-list/tipus-consums-list.component';
import { FormTipusConsumsComponent } from './components/form-tipus-consums/form-tipus-consums.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { TipusConsumsEffects } from './store/tipus-consums.effects';


@NgModule({
  declarations: [
    TipusConsumsListComponent,
    FormTipusConsumsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([TipusConsumsEffects]),
  ],
  exports: [
    TipusConsumsListComponent,
    FormTipusConsumsComponent
  ]
})
export class TipusConsumsModule { }
