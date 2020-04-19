import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesaFixaRoutingModule } from './despesa-fixa-routing.module';
import { DespesaFixaContainer } from './despesa-fixa.container';
import { FormDespesaFixaComponent } from './components/form-despesa-fixa/form-despesa-fixa.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DespesaFixaContainer, FormDespesaFixaComponent],
  imports: [
    CommonModule,
    DespesaFixaRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DespesaFixaModule { }
