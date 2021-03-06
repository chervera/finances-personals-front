import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesesFixesContainer } from './despeses-fixes.container';


const routes: Routes = [
  {
    path: '',
    component: DespesesFixesContainer
  },
  {
    path: 'create',
    loadChildren: () => import('./containers/despesa-fixa/despesa-fixa.module').then(m => m.DespesaFixaModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./containers/despesa-fixa/despesa-fixa.module').then(m => m.DespesaFixaModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesesFixesRoutingModule { }
