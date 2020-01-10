import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    public dialogRef: MatDialogRef<ProductFormComponent>
  ) {
    this.buildForm();
  }

  ngOnInit() {
    if (this.product) {
      this.formGroup.patchValue(this.product);
    }
  }

  private buildForm(): void {
    this.formGroup = this.formBuilder.group({
      id: [null, [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [
        Validators.required,
        Validators.min(0)
      ]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  close(): void {
    this.dialogRef.close(this.product);
  }

  save(): void {
    const product = this.formGroup.value as Product;
    if (this.product && this.formGroup.valid) {
      this.updateProduct(product);
    } else {
      if (this.formGroup.valid) {
        this.addProduct(product);
      }
    }
  }

  addProduct(newProduct: Product): void {
    this.productService.postObject(newProduct).subscribe((product: Product) => {
      this.product = product;
      this.close();
    });
  }

  updateProduct(updateProduct: Product): void {
    this.product = this.formGroup.value as Product;
    this.productService.putObject(updateProduct).subscribe((product: Product) => {
      this.product = product;
      this.close();
    });
  }

  onFileSelected(event: Event) {

  }


  get idField() {
    return this.formGroup.get('id');
  }

  get titleField() {
    return this.formGroup.get('title');
  }

  get priceField() {
    return this.formGroup.get('price');
  }

  get descriptionField() {
    return this.formGroup.get('descripcion');
  }

  get imageField() {
    return this.formGroup.get('image');
  }

}
