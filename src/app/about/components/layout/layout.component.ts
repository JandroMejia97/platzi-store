import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { EmployeeData } from 'src/app/core/models/employee.model';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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

  constructor(private generatorService: GeneratorService) {
    this.value$ = this.generatorService.getData().pipe(
      tap(value => console.log(value))
    );
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

  addItem(list: EmployeeData[], label) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20])
    });
  }


  ngOnDestroy() {
    console.log('Destroy');
    // this.sub$.unsubscribe();
  }
}
