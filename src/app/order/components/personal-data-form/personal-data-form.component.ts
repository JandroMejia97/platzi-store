import { Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Province } from '@core/models/province.model';
import { ProvinceService } from '@core/services/province.service';

@Component({
  selector: 'app-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.scss']
})
export class PersonalDataFormComponent implements OnInit {
  dataForm: FormGroup;
  provinces: Province[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private provinceService: ProvinceService
  ) {
    this.generateDataForm();
  }

  ngOnInit() {
    this.provinces = this.provinceService.getProvinces();
  }

  generateDataForm(): void {
    this.dataForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      addresses: this.formBuilder.array([]),
      shipping: ['free', Validators.required]
    });

  }

  addAddressField() {
    console.log(this.addressesGroup);
    this.addressesGroup.push(this.createAddressField());
  }

  private createAddressField(): FormGroup {
    console.log('CREATED');
    return this.formBuilder.group({
      address: [null, Validators.required],
      address2: null,
      city: [null, Validators.required],
      province: [null, Validators.required],
      postalCode: [null, Validators.compose([
        Validators.required, Validators.minLength(4), Validators.maxLength(5)])
      ]
    });
  }

  get addressesGroup(): FormArray {
    return this.dataForm.get('addresses') as FormArray;
  }


}

