import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() drawer: MatDrawer;
  @Input() isHandset$: Observable<boolean>;

  total$: Observable<number>;

  constructor(private cartService: CartService) {
    this.total$ = this.cartService.cart$
    .pipe(
      map((products) => products.length)
    );
  }

}
