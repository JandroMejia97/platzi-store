import { FormControl, FormGroup } from '@angular/forms';
import * as Payment from 'payment';

export class CreditCardValidators {

  /**
   * Validate the credit card number.
   */
  static validateCardNumber(control: FormControl): any {
    if (control) {
      const isValid = Payment.fns.validateCardNumber(control.value);
      if (!isValid) {
        return {
          card_number_invalid: true
        };
      }
    }
    return null;
  }

  static validateCardExpirationDate(control: FormControl) {
    if (control) {
      const value = Payment.fns.cardExpiryVal(control.value);
      const month = value.month;
      const year = value.year;

      const isValid = Payment.fns.validateCardExpiry(month, year);
      if (!isValid) {
        return {
          card_expiration_date_invalid: true
        };
      }
    }
    return null;
  }

  static validateCardSecurityCode(control: FormControl) {
    if (control) {
      const isValid = Payment.fns.validateCardCVC(control.value);
      if (!isValid) {
        return {
          card_security_code_invalid: true
        };
      }
    }

    return null;
  }
}
