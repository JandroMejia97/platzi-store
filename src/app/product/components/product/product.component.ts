import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addCart() {
    console.log('Added product');
    this.cartService.addCart(this.product);
  }

}
