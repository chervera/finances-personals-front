import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesesFixesContainer } from './despeses-fixes.container';


const routes: Routes = [
  {
    path: '',
    component: DespesesFixesContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesesFixesRoutingModule { }
