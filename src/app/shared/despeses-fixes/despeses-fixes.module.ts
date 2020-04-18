import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesesFixesComponent } from './components/despeses-fixes/despeses-fixes.component';



@NgModule({
  declarations: [DespesesFixesComponent],
  imports: [
    CommonModule
  ],
  exports: [DespesesFixesComponent]
})
export class DespesesFixesModule { }
