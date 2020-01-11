import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;
  dataForm: FormGroup;
  paymentForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.products$ = this.cartService.cart$;
    this.generateDataForm();
    this.generatePaymentForm();
  }

  ngOnInit() {
  }

  generateDataForm(): void {
    this.dataForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      address: [null, Validators.required],
      address2: null,
      city: [null, Validators.required],
      province: [null, Validators.required],
      postalCode: [null, Validators.compose([
        Validators.required, Validators.minLength(4), Validators.maxLength(5)])
      ],
      shipping: ['free', Validators.required]
    });
  }

  generatePaymentForm(): void {
    this.paymentForm = this.formBuilder.group({
      ccNumber: ['', []],
      ccExp: ['', []],
      ccCvc: ['', []],
      // ccName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    });
  }
}
