import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { CategoryCreateComponent } from './features/category/category-create/category-create.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    AdminLayoutComponent,
    SidebarComponent,
    CategoryListComponent,
    CategoryCreateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
