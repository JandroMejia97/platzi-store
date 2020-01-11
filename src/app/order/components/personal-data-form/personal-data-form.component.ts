import { Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Province } from 'src/app/core/models/province.model';
import { ProvinceService } from 'src/app/core/services/province.service';

@Component({
  selector: 'app-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.scss']
})
export class PersonalDataFormComponent implements OnInit {
  @Output() @Input() dataForm: FormGroup;
  provinces: Province[] = [];

  constructor(private provinceService: ProvinceService) {}

  ngOnInit() {
    this.provinces = this.provinceService.getProvinces();
  }


}

