import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormIngresComponent } from './components/form-ingres/form-ingres.component';
import { IngresContainer } from './ingres.container';
import { IngresRoutingModule } from './ingres-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [IngresContainer, FormIngresComponent],
  imports: [
    CommonModule,
    IngresRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class IngresModule { }
