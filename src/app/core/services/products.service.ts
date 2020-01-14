import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.model';
import { ResourcesService } from './resources.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ResourcesService<Product> {

  constructor(protected http: HttpClient, protected messageService: MessageService) {
    super('products', http, messageService);
  }
}
