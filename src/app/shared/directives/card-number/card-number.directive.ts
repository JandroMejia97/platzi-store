import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import * as Payment from 'payment';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[cardNumber]'
})
export class CardNumberDirective {

  @Output() cardType = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {

    const element = this.elementRef.nativeElement;

    Payment.formatCardNumber(element);
    Payment.restrictNumeric(element);
  }

  @HostListener('keypress', ['$event'])
  onKeypress(event: Event) {
    const element = this.elementRef.nativeElement;
    const cardType = Payment.fns.cardType(element.value);

    if (cardType) {
      this.cardType.emit(cardType);
    }
  }
}
