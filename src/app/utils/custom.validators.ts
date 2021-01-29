import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

  static isPriceValid(control: AbstractControl): ValidationErrors | null {
    const {value} = control;
    if (value > 10000) {
      return {
        price_invalid: true
      };
    }
    return null;
  }

  static validatePassword(control: AbstractControl): ValidationErrors | null {
    const {value} = control;
    return containsNumber(value) ? null : {invalidpassword: true};
  }

  static mathcPasswords(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password').value;
    const repeatPassword = control.get('repeatPassword').value;
    const condition = password === repeatPassword;
    return condition ? null : {passwordsmatch: true};
  }

}

function containsNumber(value: string): boolean {
  return value.split('').some(isNumber);
}

function isNumber(value: string): boolean {
  return !isNaN(parseInt(value, 10));
}
