import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormGeneratedComponent } from './components/product-form-generated/product-form-generated.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { TreeComponent } from './components/tree/tree.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductFormComponent } from './components/product-form/product-form.component';


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
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'orders',
        component: OrdersListComponent
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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
