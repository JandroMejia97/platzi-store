import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ResourcesService } from './resources.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ResourcesService<Product> {

  constructor(protected http: HttpClient) {
    super(http, 'products');
  }
}
