import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.getProduct();
    console.log(this.product);
  }

  getProduct() {
    this.route.params.subscribe((params: Params) => {
      this.product = this.productService.getProduct(params.id);
    });
  }

}
