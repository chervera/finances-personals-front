import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngressosContainer } from './ingressos.container';


const routes: Routes = [
  {
    path: '',
    component: IngressosContainer
  },
  {
    path: 'create',
    loadChildren: () => import('./containers/ingres/ingres.module').then(m => m.IngresModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./containers/ingres/ingres.module').then(m => m.IngresModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngressosRoutingModule { }
