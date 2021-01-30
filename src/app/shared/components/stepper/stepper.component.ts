import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StepperComponent),
      multi: true
    }
  ]
})
export class StepperComponent implements OnInit, ControlValueAccessor {
  public currentValue = 5;
  @Input() disabled = false;
  onChange = (_: any) => {};
  onTouch = () => {};

  constructor() { }

  writeValue(value: number): void {
    this.currentValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  }

  add() {
    this.currentValue++;
    this.onTouch();
    this.onChange(this.currentValue);
  }

  substract() {
    this.currentValue--;
    this.onTouch();
    this.onChange(this.currentValue);
  }

}
