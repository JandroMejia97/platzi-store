import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { Category } from '@core/models/category.model';
import { CategoriesService } from '@core/services/categories.service';
import { CategoryFormComponent } from '@admin/components/category-form/category-form.component';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.container.html',
  styleUrls: ['./categories-list.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class CategoriesListContainer implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Category>();
  categories: Category[] = [];
  displayedColumns = ['_id', 'name', 'actions'];
  constructor(
    private dialog: MatDialog,
    private categoryService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getCategories(): void {
    this.categoryService.getList().subscribe((resp: Category[]) => {
      this.categories = resp;
      this.categories.forEach((ele: Category) => ele.id = ele._id);
      this.dataSource.data = this.categories;
    });
  }

  deleteCategory(deletedCategory: Category) {
    this.categoryService.deleteObject(deletedCategory).subscribe(() => {
      this.categories = this.categories.filter((category: Category) => category._id !== deletedCategory.id);
      this.dataSource.data = this.categories;
    });
  }

  addedCategory(addedCategory: Category) {
    this.categories.push(addedCategory);
    this.dataSource.data = this.categories;
  }

  updatedCategory(updatedCategory: Category) {
    const index = this.categories.findIndex((category: Category) => Number(category._id) === Number(updatedCategory.id));
    this.categories[index] = updatedCategory;
    this.dataSource.data = this.categories;
  }

  openDialogForm() {
    console.log('OPEN');
    const dialogRef = this.dialog.open<CategoryFormComponent>(CategoryFormComponent);
    console.log('DIALOG', {dialog: this.dialog});
    console.log('DIALOG REF', {dialogRef});
    dialogRef.afterClosed().subscribe((result: Category) => {
      console.log('The dialog was closed');
      if (result) {
        this.addedCategory(result);
      }
    });
  }

  openEditDialogForm(category: Category) {
    const dialogRef = this.dialog.open<CategoryFormComponent>(CategoryFormComponent, {
      data: category
    });

    dialogRef.afterClosed().subscribe((result: Category) => {
      console.log('The dialog was closed');
      if (result) {
        this.updatedCategory(result);
      }
    });
  }
}
