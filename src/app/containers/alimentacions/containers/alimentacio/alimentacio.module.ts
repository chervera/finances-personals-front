import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormAlimentacioComponent } from './components/form-alimentacio/form-alimentacio.component';
import { AlimentacioContainer } from './alimentacio.container';
import { AlimentacioRoutingModule } from './alimentacio-routing.module';



@NgModule({
  declarations: [AlimentacioContainer, FormAlimentacioComponent],
  imports: [
    CommonModule,
    AlimentacioRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AlimentacioModule { }
