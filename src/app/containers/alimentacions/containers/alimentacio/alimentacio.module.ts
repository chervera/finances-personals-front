import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormAlimentacioComponent } from './components/form-alimentacio/form-alimentacio.component';
import { AlimentacioContainer } from './alimentacio.container';
import { AlimentacioRoutingModule } from './alimentacio-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [AlimentacioContainer, FormAlimentacioComponent],
  imports: [
    CommonModule,
    AlimentacioRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AlimentacioModule { }
