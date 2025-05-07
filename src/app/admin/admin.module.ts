import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    AdminLayoutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
