import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '@core/services/message.service';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      fullName: this.formBuilder.group({
        firstName: ['', [
          Validators.required,
          Validators.maxLength(30),
          Validators.pattern(/^[a-zA-Z ]+$/)
        ]],
        lastName: ['', [
          Validators.required,
          Validators.maxLength(30),
          Validators.pattern(/^[a-zA-Z ]+$/)
        ]]
      })
    });
  }

  submitForm(): void {
    if (this.form.invalid) {
      this.messageService.openSnackBar('The form is invalid.');
    } else {
      this.messageService.openSnackBar('The form is valid.');
    }
  }

  get firstNameField(): AbstractControl {
    return this.form.get('fullName.firstName');
  }

  get lastNameField(): AbstractControl {
    return this.form.get('fullName.lastName');
  }

}
