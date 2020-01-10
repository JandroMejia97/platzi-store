import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public openedSideNav: boolean;
  @Output() toggle = new EventEmitter<boolean>();

  total = 0;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe((products) => {
      this.total = products.length;
    })
  }

}
