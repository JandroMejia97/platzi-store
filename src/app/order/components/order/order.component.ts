import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';
import { Observable } from 'rxjs';
import { PaymentFormComponent } from '@order/components/payment-form/payment-form.component';
import { PersonalDataFormComponent } from '@order/components/personal-data-form/personal-data-form.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;
  @ViewChild(PaymentFormComponent) paymentFormComponent: PaymentFormComponent;
  @ViewChild(PersonalDataFormComponent) dataFormComponent: PersonalDataFormComponent;
  isMedium$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  get paymentForm() {
    return this.paymentFormComponent ? this.paymentFormComponent.paymentForm : null;
  }

  get dataForm() {
    return this.dataForm ? this.dataFormComponent.dataForm : null;
  }

  constructor(
    private cartService: CartService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit() {
  }

}
