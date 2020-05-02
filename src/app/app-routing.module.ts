import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/guards/auth-guard.service';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./containers/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'ingressos',
    loadChildren: () => import('./containers/ingressos/ingressos.module').then(m => m.IngressosModule)
  },
  {
    path: 'despeses-fixes',
    loadChildren: () => import('./containers/despeses-fixes/despeses-fixes.module').then(m => m.DespesesFixesModule)
  },
  {
    path: 'alimentacions',
    canLoad: [AuthGuardService],
    loadChildren: () => import('./containers/alimentacions/alimentacions.module').then(m => m.AlimentacionsModule)
  },
  {
    path: 'consums',
    canLoad: [AuthGuardService],
    loadChildren: () => import('./containers/consums/consums.module').then(m => m.ConsumsModule)
  },
  {
    path: 'dashboard',
    canLoad: [AuthGuardService],
    loadChildren: () => import('./containers/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
