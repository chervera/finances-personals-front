import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesesFixesModule } from './despeses-fixes/despeses-fixes.module';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FilterComponent],
  imports: [
    CommonModule,
    DespesesFixesModule,
    ReactiveFormsModule
  ],
  exports: [
    DespesesFixesModule,
    FilterComponent
  ]
})
export class SharedModule { }
