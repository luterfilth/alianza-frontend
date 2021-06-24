import { DashboardComponent } from './dashboard.component';
import { NavModule } from '../shared/modules/nav.module';
import { MaterialModule } from '../shared/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { ClientFormComponent } from './components/client-form/client-form.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ClientViewComponent,
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    NavModule,
  ]
})
export class DashboardModule { }
