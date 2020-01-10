import { Injectable } from '@angular/core';
import { ResourcesService } from './resources.service';

import { Order } from '../models/order.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends ResourcesService<Order> {

  constructor(protected http: HttpClient) {
    super(http, 'orders');
  }
}
