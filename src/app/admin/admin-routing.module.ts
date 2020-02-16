import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormGeneratedComponent } from './components/product-form-generated/product-form-generated.component';
import { NavComponent } from './components/nav/nav.component';
import { TreeComponent } from './components/tree/tree.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DateComponent } from './components/date/date.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { ProductsListContainer } from './containers/products-list/products-list.container';
import { OrdersListContainer } from './containers/orders-list/orders-list.container';


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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
