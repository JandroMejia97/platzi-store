import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product.model';
import { ProductsService } from '@core/services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.container.html',
  styleUrls: ['./product-list.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductListContainer implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  selectedProduct(id: number) {
    console.log(id);
  }

  getProducts() {
    this.products$ = this.productService.getList();
  }

}
