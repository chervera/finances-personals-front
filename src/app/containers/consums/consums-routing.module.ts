import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumsContainer } from './consums.container';



const routes: Routes = [
  {
    path: '',
    component: ConsumsContainer
  },
  {
    path: 'create',
    loadChildren: () => import('./containers/consum/consum.module').then(m => m.ConsumModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./containers/consum/consum.module').then(m => m.ConsumModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumsRoutingModule { }
