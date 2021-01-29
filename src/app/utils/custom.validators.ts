import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  static isPriceValid(control: AbstractControl): any {
    const value = control.value;
    if (value > 10000) {
      return {
        price_invalid: true
      };
    }
    return null;
  }

  static validatePassword(control: AbstractControl): any {
    const {value} = control;
    console.log({value})
    if (!containsNumber(value)) {
      return {invalidpassword: true};
    }
    return null;
  }

}

function containsNumber(value: string): boolean {
  return value.split('').some(isNumber);
}

function isNumber(value: string): boolean {
  return !isNaN(parseInt(value, 10));
}
