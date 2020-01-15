import { Component, Input, OnDestroy, HostBinding, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, NgControl, Validators } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'credit-card-expiration-date-input',
  templateUrl: 'credit-card-expiration-date-input.component.html',
  styleUrls: ['../credit-card-input.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: CreditCardExpirationDateInput }],
})
// tslint:disable-next-line: component-class-suffix
export class CreditCardExpirationDateInput implements MatFormFieldControl<Date>, OnDestroy {

  @Input()
  get value(): Date | null {
    const date = (this.creditCardForm.value).creditCardExpirationDate as Date;
    if ((date.getFullYear >= this.now.getFullYear)) {
      return date;
    }
    return null;
  }
  set value(creditCardExpirationDate: Date | null) {
    creditCardExpirationDate = creditCardExpirationDate || new Date();
    this.creditCardForm.setValue({ creditCardExpirationDate });
    this.stateChanges.next();
  }

  @Input()
  get placeholder() {
    return this._placeholder;
  }

  set placeholder(placeholder) {
    this._placeholder = placeholder;
    this.stateChanges.next();
  }

  get empty() {
    const n = this.creditCardForm.value;
    return !n.creditCardExpirationDate;
  }

  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input()
  get required() {
    return this._required;
  }

  set required(required) {
    this._required = coerceBooleanProperty(required);
    this.stateChanges.next();
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.creditCardForm.disable() : this.creditCardForm.enable();
    this.stateChanges.next();
  }

  constructor(
    private formBuilder: FormBuilder,
    private focusMonitor: FocusMonitor,
    private elementRef: ElementRef<HTMLElement>
  ) {
    this.creditCardForm = this.formBuilder.group({
      creditCardExpirationDate: [this.now.toISOString().split('T')[0], [
        Validators.required
      ]]
    });
    focusMonitor.monitor(elementRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }
  static nextId = 0;
  creditCardForm: FormGroup;
  stateChanges = new Subject<void>();
  @HostBinding() id = `credit-card-expiration-date-input-${CreditCardExpirationDateInput.nextId++}`;
  // tslint:disable-next-line: variable-name
  private _placeholder: string;
  // tslint:disable-next-line: variable-name
  private _required: boolean;
  // tslint:disable-next-line: variable-name
  private _disabled: boolean;
  ngControl: NgControl = null;
  focused = false;
  errorState = false;
  now = new Date();
  controlType = 'credit-card-expiration-date-input';
  autofilled?: boolean;
  @HostBinding('attr.aria-describedby') describedBy = '';
  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }
  onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elementRef.nativeElement.querySelector('input').focus();
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.focusMonitor.stopMonitoring(this.elementRef.nativeElement);
  }

}
