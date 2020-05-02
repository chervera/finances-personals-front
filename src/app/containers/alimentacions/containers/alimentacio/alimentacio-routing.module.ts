import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlimentacioContainer } from './alimentacio.container';


const routes: Routes = [
  {
    path: '',
    component: AlimentacioContainer
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimentacioRoutingModule { }
