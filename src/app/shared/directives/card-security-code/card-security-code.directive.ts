import { Directive, ElementRef } from '@angular/core';
import * as Payment from 'payment';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[cardSecurityCode]'
})
export class CardSecurityCodeDirective {

  constructor(private elementRef: ElementRef) {
    const element = this.elementRef.nativeElement;
    Payment.formatCardCVC(element);
    Payment.restrictNumeric(element);
  }

}
