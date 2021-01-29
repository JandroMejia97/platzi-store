import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '@material/material.module';

import { NavComponent } from './components/nav/nav.component';
import { TreeComponent } from './components/tree/tree.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersListContainer } from './containers/orders-list/orders-list.container';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListContainer } from './containers/products-list/products-list.container';
import { ProductFormGeneratedComponent } from './components//product-form-generated/product-form-generated.component';
import { DateComponent } from './components/date/date.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { QuicklinkModule } from 'ngx-quicklink';
import { BasicFormComponent } from './components/basic-form/basic-form.component';

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
    ProductFormGeneratedComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    QuicklinkModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ProductFormComponent
  ]
})
export class AdminModule { }
