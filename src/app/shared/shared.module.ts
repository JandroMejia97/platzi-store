import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HighlightDirective,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
