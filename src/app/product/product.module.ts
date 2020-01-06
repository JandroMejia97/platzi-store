import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
