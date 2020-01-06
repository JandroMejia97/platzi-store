import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContactComponent } from './contact/components/contact/contact.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
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
        loadChildren: () => import('./home/home.module').then(h => h.HomeModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(c => c.ContactModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(p => p.ProductModule)
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
