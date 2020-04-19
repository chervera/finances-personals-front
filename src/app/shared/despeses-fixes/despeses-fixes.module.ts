import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesesFixesListComponent } from './components/despeses-fixes/despeses-fixes-list.component';




@NgModule({
  declarations: [DespesesFixesListComponent],
  imports: [
    CommonModule
  ],
  exports: [DespesesFixesListComponent]
})
export class DespesesFixesModule { }
