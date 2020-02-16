import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListContainer } from './containers/product-list/product-list.container';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ProductListContainer
  },
  {
    path: ':id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
