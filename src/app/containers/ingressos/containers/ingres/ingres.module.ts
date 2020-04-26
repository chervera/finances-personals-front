import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormIngresComponent } from './components/form-ingres/form-ingres.component';
import { IngresContainer } from './ingres.container';
import { IngresRoutingModule } from './ingres-routing.module';



@NgModule({
  declarations: [IngresContainer, FormIngresComponent],
  imports: [
    CommonModule,
    IngresRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class IngresModule { }
