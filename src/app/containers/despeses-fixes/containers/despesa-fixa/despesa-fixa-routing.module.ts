import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesaFixaContainer } from './despesa-fixa.container';


const routes: Routes = [
  {
    path: '',
    component: DespesaFixaContainer
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesaFixaRoutingModule { }
