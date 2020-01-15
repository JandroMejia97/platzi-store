import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CreditCardValidators } from 'src/app/utils/credit-card.validators';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { PersonalDataFormComponent } from '../personal-data-form/personal-data-form.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;
  @ViewChild(PaymentFormComponent, {static: false}) paymentFormComponent: PaymentFormComponent;
  @ViewChild(PersonalDataFormComponent, {static: false}) dataFormComponent: PersonalDataFormComponent;

  get paymentForm() {
    return this.paymentFormComponent ? this.paymentFormComponent.paymentForm : null;
  }

  get dataForm() {
    return this.dataForm ? this.dataFormComponent.dataForm : null;
  }

  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit() {
  }

}
