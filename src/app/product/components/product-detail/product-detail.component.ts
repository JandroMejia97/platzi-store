import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.route.params.subscribe((params: Params) => {
      const id = Number(params.id);
      this.productService.getProduct(id).subscribe((resp: any) => {
        this.product = resp;
      });
    });
  }

}
