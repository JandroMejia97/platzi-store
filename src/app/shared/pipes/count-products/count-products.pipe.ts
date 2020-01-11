import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countProducts'
})
export class CountProductsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
