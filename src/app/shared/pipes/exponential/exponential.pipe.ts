import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(base: number, exponent: number): any {
    return Math.pow(base, exponent);
  }

}
