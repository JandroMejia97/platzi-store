import { Component, Input, OnDestroy, HostBinding, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, NgControl, Validators } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { CreditCardValidators } from '@utils/credit-card.validators';
import { strictEqual } from 'assert';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'credit-card-number-input',
  templateUrl: './credit-card-number-input.component.html',
  styleUrls: ['../credit-card-input.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: CreditCardNumberInput }]
})
// tslint:disable-next-line: component-class-suffix
export class CreditCardNumberInput implements MatFormFieldControl<CardNumber>, OnDestroy {

  @Input()
  get value(): CardNumber | null {
    const n = this.creditCardForm.value;
    if (n.firstPart.length === 4 && n.secondPart.length === 4 && n.thirdPart.length === 4 && n.fourthPart.length === 4) {
      return new CardNumber(n.firstPart, n.secondPart, n.thirdPart, n.fourthPart);
    }
    return null;
  }
  set value(cardNumber: CardNumber | null) {
    cardNumber = cardNumber || null;
    this.creditCardForm.patchValue(cardNumber);
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
    return !n.creditCardNumber;
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
      firstPart: [null, [Validators.required]],
      secondPart: [null, [Validators.required]],
      thirdPart: [null, [Validators.required]],
      fourthPart: [null, [Validators.required]]
    });
    focusMonitor.monitor(elementRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }
  static nextId = 0;
  creditCardForm: FormGroup;
  stateChanges = new Subject<void>();
  @HostBinding() id = `credit-card-number-input-${CreditCardNumberInput.nextId++}`;
  // tslint:disable-next-line: variable-name
  private _placeholder: string;
  // tslint:disable-next-line: variable-name
  private _required: boolean;
  // tslint:disable-next-line: variable-name
  private _disabled: boolean;
  ngControl: NgControl = null;
  focused = false;
  errorState = false;
  controlType = 'credit-card-number-input';
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

class CardNumber {
  constructor(
    public firstPart: string,
    public secondPart: string,
    public thirdPart: string,
    public fourthPart: string
  ) {}
}
