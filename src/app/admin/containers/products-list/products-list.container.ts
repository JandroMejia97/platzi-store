import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '@core/services/products.service';
import { Product } from '@core/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from '@admin/components/product-form/product-form.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.container.html',
  styleUrls: ['./products-list.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsListContainer implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Product>();
  products: Product[] = [];

  displayedColumns = ['id', 'title', 'price', 'actions'];

  constructor(
    private matDialog: MatDialog,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getProducts() {
    this.productService.getList().subscribe((resp: Product[]) => {
      this.products = resp;
      this.dataSource.data = this.products;
    });
  }

  deleteProduct(deletedProduct: Product) {
    this.productService.deleteObject(deletedProduct).subscribe(() => {
      this.products = this.products.filter((product: Product) => Number(product.id) !== Number(deletedProduct.id));
      this.dataSource.data = this.products;
    });
  }

  addedProduct(addedProduct: Product) {
    this.products.push(addedProduct);
    this.dataSource.data = this.products;
  }

  updatedProduct(updatedProduct: Product) {
    const id = this.products.findIndex((product: Product) => Number(product.id) === Number(updatedProduct.id));
    this.products[id] = updatedProduct;
    this.dataSource.data = this.products;
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
