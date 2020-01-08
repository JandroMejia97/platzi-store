import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductsListDataSource, ProductsListItem } from './products-list-datasource';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @ViewChild('productTable', {static: false}) table: MatTable<Product>;
  products: Product[] = [];

  displayedColumns = ['id', 'title', 'price', 'actions'];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((resp: Product[]) => {
      this.products = resp;
      this.table.dataSource = this.products;
    });
  }

  deleteProduct(deletedProduct: Product) {
    this.productService.deleteProduct(deletedProduct).subscribe(() => {
      this.products = this.products.filter((product: Product) => Number(product.id) !== Number(deletedProduct.id));
      this.table.dataSource = this.products;
      this.table.renderRows();
    });
  }

}
