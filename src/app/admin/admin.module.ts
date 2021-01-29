import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@material/material.module';
import { AdminRoutingModule } from './admin-routing.module';

import { NavComponent } from './components/nav/nav.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { DateComponent } from './components/date/date.component';
import { TreeComponent } from './components/tree/tree.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { OrdersListContainer } from './containers/orders-list/orders-list.container';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListContainer } from './containers/products-list/products-list.container';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoriesListContainer } from './containers/categories-list/categories-list.container';
import { ProductFormGeneratedComponent } from './components//product-form-generated/product-form-generated.component';

@NgModule({
  declarations: [
    NavComponent,
    PdfComponent,
    TreeComponent,
    DateComponent,
    DashboardComponent,
    BasicFormComponent,
    OrdersListContainer,
    ProductFormComponent,
    ProductsListContainer,
    CategoryFormComponent,
    CategoriesListContainer,
    ProductFormGeneratedComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    QuicklinkModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
