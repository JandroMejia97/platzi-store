import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() selectedProduct = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  addCart() {
    console.log('Added product');
    this.selectedProduct.emit(this.product.id);
  }

}
