import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreditCardValidators } from 'src/app/utils/credit-card.validators';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  paymentForm: FormGroup;
  cardType: string;

  constructor(private formBuilder: FormBuilder) {
    this.generatePaymentForm();
  }

  ngOnInit() {
  }

  onToggle(cardType: string) {
    this.cardType = cardType;
  }

  generatePaymentForm(): void {
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', [CreditCardValidators.validateCardNumber]],
      cardExpirationDate: ['', [CreditCardValidators.validateCardExpirationDate]],
      cardSecurityCode: ['', [CreditCardValidators.validateCardSecurityCode]],
      cardOwnerName: ['', [Validators.required, Validators.minLength(10)]],
      cardDocumentType: ['dni', [Validators.required]],
      cardDocumentNumber: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]]
    });
  }

}
