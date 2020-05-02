import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlimentacionsContainer } from './alimentacions.container';



const routes: Routes = [
  {
    path: '',
    component: AlimentacionsContainer
  },
  {
    path: 'create',
    loadChildren: () => import('./containers/alimentacio/alimentacio.module').then(m => m.AlimentacioModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./containers/alimentacio/alimentacio.module').then(m => m.AlimentacioModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimentacionsRoutingModule { }
