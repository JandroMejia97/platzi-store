import { Component, OnInit } from '@angular/core';
import { addDays, format } from 'date-fns';

@Component({
  selector: 'app-date',
  template: `
    <h1>{{ date }}</h1>
  `,
  styles: ['']
})
export class DateComponent implements OnInit {
  date: string;

  constructor() { }

  ngOnInit() {
    // this.date = moment().add(20, 'days').format('YYYY/MMMM/DD');
    this.date = format(addDays(new Date(), 20), 'yyyy/MMMM/dd');
  }

}
