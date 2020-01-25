import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

import { Order } from 'src/app/core/models/order.model';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
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
