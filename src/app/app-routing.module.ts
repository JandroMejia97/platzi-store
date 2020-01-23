import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { AdminGuard } from './guards/admin.guard';
import { PreloadService } from './core/services/preload.service';
import { QuicklinkStrategy } from 'ngx-quicklink';


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
        loadChildren: () => import('./home/home.module').then(h => h.HomeModule),
        data: { preload: true }
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(c => c.ContactModule),
        data: { preload: true }
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(c => c.AboutModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(p => p.ProductModule),
        data: { preload: true }
      },
      {
        path: 'orders',
        loadChildren: () => import('./order/order.module').then(o => o.OrderModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule)
      }
    ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadService
      enableTracing: false,
      preloadingStrategy: QuicklinkStrategy,
      paramsInheritanceStrategy: 'always'
    })],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
