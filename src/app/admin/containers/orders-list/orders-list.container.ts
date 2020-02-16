import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

import { Order } from '@core/models/order.model';
import { OrdersService } from '@core/services/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.container.html',
  styleUrls: ['./orders-list.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class OrdersListContainer implements OnInit {
  @ViewChild('orderTable') table: MatTable<Order>;
  orders: Order[] = [];

  displayedColumns = ['number', 'title', 'price', 'actions'];

  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    // this.getOrders();
  }

  getOrders() {
    this.orderService.getList().subscribe((resp: Order[]) => {
      this.orders = resp;
      this.table.dataSource = this.orders;
    });
  }

  deleteOrder(deletedOrder: Order) {
    this.orderService.deleteObject(deletedOrder).subscribe(() => {
      this.orders = this.orders.filter((order: Order) => Number(order.id) !== Number(deletedOrder.id));
      this.table.dataSource = this.orders;
      this.table.renderRows();
    });
  }

}
