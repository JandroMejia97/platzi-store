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
import { ReactiveFormsModule } from '@angular/forms';
import { CountProductsPipe } from './pipes/count-products/count-products.pipe';
import { CreditCardNumberInput } from './inputs/credit-card-number/credit-card-number-input.component';
import { CreditCardExpirationDateInput } from './inputs/credit-card-expiration-date/credit-card-expiration-date-input.component';
import { CardNumberDirective } from './directives/card-number/card-number.directive';
import { CardExpirationDateDirective } from './directives/card-expiration-date/card-expiration-date.directive';
import { CardSecurityCodeDirective } from './directives/card-security-code/card-security-code.directive';
import { QuicklinkModule } from 'ngx-quicklink';


@NgModule({
  declarations: [
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidenavComponent,
    CountProductsPipe,
    HighlightDirective,
    CardNumberDirective,
    CreditCardNumberInput,
    PageNotFoundComponent,
    CardSecurityCodeDirective,
    CardExpirationDateDirective,
    CreditCardExpirationDateInput,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    QuicklinkModule,
    ReactiveFormsModule,
  ],
  exports: [
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    CountProductsPipe,
    HighlightDirective,
    CardNumberDirective,
    CreditCardNumberInput,
    PageNotFoundComponent,
    CardSecurityCodeDirective,
    CardExpirationDateDirective,
    CreditCardExpirationDateInput
  ]
})
export class SharedModule { }
