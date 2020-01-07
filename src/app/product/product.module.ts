import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    MaterialModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
