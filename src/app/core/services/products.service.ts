import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = environment.apiUrl + '/products/';
  products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url)
    .pipe(
      tap(_ => console.log('Data obtained successfully.'))
    );
  }

  getProduct(product: number | Product): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    return this.httpClient.get<Product>(`${this.url}${id}`)
    .pipe(
      tap(_ => console.log('Data obtained successfully.'))
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.url}`, product)
    .pipe(
      tap(_ => console.log('Data saved successfully.'))
    );
  }

  updateProduct(product: Partial<Product>): Observable<Product> {
    return this.httpClient.put<Product>(`${this.url}${product.id}`, product)
    .pipe(
      tap(_ => console.log('Data updated successfully.'))
    );
  }

  deleteProduct(product: number | Product): Observable<any> {
    const id = typeof product === 'number' ? product : product.id;
    return this.httpClient.delete<any>(`${this.url}${id}`)
    .pipe(
      tap(_ => console.log('Data deleted successfully.'))
    );
  }
}
