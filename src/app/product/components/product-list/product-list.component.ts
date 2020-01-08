import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  selectedProduct(id: number) {
    console.log(id);
  }

  getProducts() {
    this.productService.getList().subscribe((resp) => {
      this.products = resp;
    });
  }

}
