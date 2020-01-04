import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(h => h.HomeModule)
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
