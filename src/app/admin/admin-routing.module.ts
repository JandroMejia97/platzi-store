import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfComponent } from './components/pdf/pdf.component';
import { NavComponent } from './components/nav/nav.component';
import { TreeComponent } from './components/tree/tree.component';
import { DateComponent } from './components/date/date.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersListContainer } from './containers/orders-list/orders-list.container';
import { ProductsListContainer } from './containers/products-list/products-list.container';
import { ProductFormGeneratedComponent } from './components/product-form-generated/product-form-generated.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { CategoriesListContainer } from './containers/categories-list/categories-list.container';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'categories',
        component: CategoriesListContainer
      },
      {
        path: 'products',
        component: ProductsListContainer
      },
      {
        path: 'orders',
        component: OrdersListContainer
      },
      {
        path: 'dates',
        component: DateComponent
      },
      {
        path: 'pdf',
        component: PdfComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'tree',
        component: TreeComponent
      },
      {
        path: 'generic-form',
        component: ProductFormGeneratedComponent
      },
      {
        path: 'basic',
        component: BasicFormComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
