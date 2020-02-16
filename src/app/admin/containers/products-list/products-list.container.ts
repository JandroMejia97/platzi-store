import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ProductsService } from '@core/services/products.service';
import { Product } from '@core/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from '@admin/components/product-form/product-form.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.container.html',
  styleUrls: ['./products-list.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsListContainer implements OnInit {
  @ViewChild('productTable') table: MatTable<Product>;
  products: Product[] = [];

  displayedColumns = ['id', 'title', 'price', 'actions'];

  constructor(private productService: ProductsService, private matDialog: MatDialog) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getList().subscribe((resp: Product[]) => {
      this.products = resp;
      this.table.dataSource = this.products;
    });
  }

  deleteProduct(deletedProduct: Product) {
    this.productService.deleteObject(deletedProduct).subscribe(() => {
      this.products = this.products.filter((product: Product) => Number(product.id) !== Number(deletedProduct.id));
      this.table.dataSource = this.products;
      this.table.renderRows();
    });
  }

  addedProduct(addedProduct: Product) {
    this.products.push(addedProduct);
    this.table.dataSource = this.products;
    this.table.renderRows();
  }

  updatedProduct(updatedProduct: Product) {
    const id = this.products.findIndex((product: Product) => Number(product.id) === Number(updatedProduct.id));
    this.products[id] = updatedProduct;
    this.table.dataSource = this.products;
    this.table.renderRows();
  }

  addDialog() {
    const dialogRef = this.matDialog.open(ProductFormComponent);
    dialogRef.afterClosed().subscribe((result: Product) => {
      console.log('The dialog was closed');
      if (result) {
        this.addedProduct(result);
      }
    });
  }

  editDialog(product: Product) {
    const dialogRef = this.matDialog.open(ProductFormComponent, {
      data: product
    });

    dialogRef.afterClosed().subscribe((result: Product) => {
      console.log('The dialog was closed');
      if (result) {
        this.updatedProduct(result);
      }
    });
  }

}
