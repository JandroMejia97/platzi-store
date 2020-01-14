import { Injectable } from '@angular/core';
import { ResourcesService } from './resources.service';

import { Order } from '../models/order.model';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends ResourcesService<Order> {

  constructor(protected http: HttpClient, protected messageService: MessageService) {
    super('orders', http, messageService);
  }
}
