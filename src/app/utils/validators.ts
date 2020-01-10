import { AbstractControl } from '@angular/forms';

export class Validators {

  static isPriceValid(control: AbstractControl): any {
    const value = control.value;
    if (value > 10000) {
      return {
        price_invalid: true
      };
    }
    return null;
  }
}
