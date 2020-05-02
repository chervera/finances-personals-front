import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumContainer } from './consum.container';


const routes: Routes = [
  {
    path: '',
    component: ConsumContainer
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumRoutingModule { }
