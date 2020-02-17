import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneratorService } from '@core/services/generator.service';
import { EmployeeData } from '@core/models/employee.model';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '@core/services/user.service';
import { User } from '@core/models/user.model';

import * as FileSaver from 'file-saver';

const names = [
  'Carlos',
  'Pedro',
  'Luis',
  'Ramiro',
  'Marta',
  'Miguel',
  'Ligia',
  'Rodrigo'
];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  salesList: EmployeeData[] = [];
  bList: EmployeeData[] = [];
  value$: Observable<number>;
  sub$: Subscription;

  constructor(
    private userService: UserService,
    private generatorService: GeneratorService,
  ) {
    this.value$ = this.generatorService.getData().pipe(
      tap(value => console.log(value))
    );
    this.userService.getUsers().subscribe((users: User[]) => console.log(users));
  }

  ngOnInit() {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.bList = this.generatorService.generate(names, [10, 20], 10);
    /*
    this.sub$ = this.generatorService.getData().subscribe(value => {
        this.value = value;
        console.log(this.value);
      });
    */
  }

  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20])
    });
  }

  deleteItem(list: EmployeeData[], item: EmployeeData) {
    console.log(list);
    // tslint:disable-next-line: no-shadowed-variable
    list.splice(list.indexOf(item), 1);
    console.log(list);
  }

  getFile() {
    this.userService.getFile().subscribe(content => {
      const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
      FileSaver.saveAs(blob, 'test.txt');
    });
  }

  ngOnDestroy() {
    console.log('Destroy');
    // this.sub$.unsubscribe();
  }
}
