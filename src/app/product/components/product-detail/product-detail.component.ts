import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '@core/models/product.model';
import { ProductsService } from '@core/services/products.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product$: Observable<Product>;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.product$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.productService.getObject(Number(params.id));
      })
    );
  }

}
