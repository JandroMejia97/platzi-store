import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

export class CrossFieldErrorStateMatcher implements ErrorStateMatcher {
  constructor(private error: string | string[]) {}
  isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    const hasError = (error: string): boolean => form.hasError(error);
    const hasSomeError = typeof(this.error) === 'string' ? hasError(this.error) : this.error.some(hasError);
    return !!(form.invalid && hasSomeError && (control.dirty || control.touched) || (form.submitted && control.invalid));
  }

}
