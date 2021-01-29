import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CategoriesService } from '@core/services/categories.service';
import { map } from 'rxjs/operators';

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

  static checkAvailability(service: CategoriesService): ValidationErrors | null {
    return (control: AbstractControl) => {
        const { value } = control;
        return service.checkAvailability(value)
          .pipe(
            map((resp: {isAvailable: boolean}) => {
              const {isAvailable} = resp;
              return isAvailable ? null : { notavailable: true };
            })
          );
    };
  }

}

function containsNumber(value: string): boolean {
  return value.split('').some(isNumber);
}

function isNumber(value: string): boolean {
  return !isNaN(parseInt(value, 10));
}
