import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';

import { TreeComponent } from './components/tree/tree.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';

@NgModule({
  declarations: [
    NavComponent,
    TreeComponent,
    DashboardComponent,
    ProductFormComponent,
    ProductsListComponent,
    OrdersListComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
