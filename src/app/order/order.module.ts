import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';
import { PersonalDataFormComponent } from './components/personal-data-form/personal-data-form.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';


@NgModule({
  declarations: [OrderComponent, PersonalDataFormComponent, PaymentFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    OrderRoutingModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
