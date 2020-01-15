import { Directive, ElementRef } from '@angular/core';
import * as Payment from 'payment';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[cardExpirationDate]'
})
export class CardExpirationDateDirective {

  constructor(private elementRef: ElementRef) {
    const element = this.elementRef.nativeElement;

    Payment.formatCardExpiry(element);
    Payment.restrictNumeric(element);
  }

}
