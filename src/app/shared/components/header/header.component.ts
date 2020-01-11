import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public openedSideNav: boolean;
  @Output() toggle = new EventEmitter<boolean>();

  total$: Observable<number>;

  constructor(private cartService: CartService) {
    this.total$ = this.cartService.cart$
    .pipe(
      map((products) => products.length)
    );
  }

}
