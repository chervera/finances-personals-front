import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'despeses-fixes',
    loadChildren: () => import('./containers/despeses-fixes/despeses-fixes.module').then(m => m.DespesesFixesModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./containers/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
