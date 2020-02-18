import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [
    MatSnackBar,
    ProductsService,
  ]
})
export class CoreModule { }
