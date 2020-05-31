import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MastersContainer } from './masters.container';

const routes: Routes = [
  {
    path: '',
    component: MastersContainer
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
