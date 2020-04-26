import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresContainer } from './ingres.container';


const routes: Routes = [
  {
    path: '',
    component: IngresContainer
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresRoutingModule { }
