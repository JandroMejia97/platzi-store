import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '@core/models/product.model';
import { ProductsService } from '@core/services/products.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  formGroup: FormGroup;
  subject: BehaviorSubject<string>;
  imageUrl$: Observable<string>;
  uploadPercent$: Observable<number>;

  constructor(
    private afs: AngularFireStorage,
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    public dialogRef: MatDialogRef<ProductFormComponent>
  ) { }

  ngOnInit() {
    this.buildForm();
    if (this.product) {
      this.formGroup.patchValue(this.product);
      this.subject = new BehaviorSubject<string>(this.product.image);
      this.imageUrl$ = this.subject.asObservable();
    }
  }

  private buildForm(): void {
    this.formGroup = this.formBuilder.group({
      id: [null],
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
    this.productService.putObject(updateProduct).subscribe((product: Product) => {
      this.product = product;
      this.close();
    });
  }

  uploadFile(event: any) {
    const file = event.target.files[0];
    const path = `images/products/${file.name}`;
    const fileRef = this.afs.ref(path);
    const task = this.afs.upload(path, file);
    this.uploadPercent$ = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(() => {
        this.imageUrl$ = fileRef.getDownloadURL();
      })
    ).subscribe();
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
