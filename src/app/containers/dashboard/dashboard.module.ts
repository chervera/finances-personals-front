import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainer } from './dashboard.container';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResumComponent } from './components/resum/resum.component';


@NgModule({
  declarations: [DashboardContainer, ResumComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
