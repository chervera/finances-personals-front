import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesesFixesModule } from './despeses-fixes/despeses-fixes.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DespesesFixesModule
  ],
  exports: [
    DespesesFixesModule
  ]
})
export class SharedModule { }
