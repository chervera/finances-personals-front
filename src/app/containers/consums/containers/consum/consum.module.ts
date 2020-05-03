import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormConsumComponent } from './components/form-consum/form-consum.component';
import { ConsumContainer } from './consum.container';
import { ConsumRoutingModule } from './consum-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [ConsumContainer, FormConsumComponent],
  imports: [
    CommonModule,
    ConsumRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class ConsumModule { }
