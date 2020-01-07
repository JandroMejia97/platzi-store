import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';



@NgModule({
  declarations: [
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HighlightDirective,
    PageNotFoundComponent,
    SidenavComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HighlightDirective,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
