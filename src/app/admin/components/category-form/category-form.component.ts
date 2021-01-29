import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '@core/models/category.model';
import { CategoriesService } from '@core/services/categories.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  form: FormGroup;
  subject: BehaviorSubject<string>;
  image$: Observable<string>;
  uploadPercent$: Observable<number>;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoriesService,
    private angularStorage: AngularFireStorage,
    @Inject(MAT_DIALOG_DATA) public category: Category,
    public dialogRef: MatDialogRef<CategoryFormComponent>
  ) { }

  ngOnInit(): void {
    this.buildForm();
    if (this.category) {
      this.form.patchValue(this.category);
      this.subject = new BehaviorSubject<string>(this.category.image);
      this.image$ = this.subject.asObservable();
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id: [null, [Validators.required]],
      name: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  close(): void {
    this.dialogRef.close(this.category);
  }

  save(): void {
    const category = this.form.value as Category;
    if (this.form.valid) {
      if (this.category) {
        this.updateCategory(category);
      } else {
        this.addCategory(category);
      }
    }
  }

  addCategory(newCategory: Category): void {
    this.categoryService.postObject(newCategory).subscribe((category: Category) => {
      this.category = category;
      this.close();
    });
  }

  updateCategory(updateCategory: Category): void {
    this.categoryService.putObject(updateCategory).subscribe((category: Category) => {
      this.category = category;
      this.close();
    });
  }

  uploadFile(event: any) {
    const file = event.target.files[0];
    const path = `images/categories/${file.name}`;
    const fileRef = this.angularStorage.ref(path);
    const task = this.angularStorage.upload(path, file);
    this.uploadPercent$ = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          this.imageField.setValue(url);
        });
      })
    ).subscribe();
  }

  get nameField(): AbstractControl {
    return this.form.get('name');
  }

  get imageField(): AbstractControl {
    return this.form.get('image');
  }

}
