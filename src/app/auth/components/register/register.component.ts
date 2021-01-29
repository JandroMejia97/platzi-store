import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { CustomValidators } from '@utils/custom.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        CustomValidators.validatePassword
      ])],
      repeatPassword: ['', Validators.required]
    });
  }

  submitSignIn(): void {
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.signIn(value.email, value.password)
      .then(resp => {
        this.authService.signUp(value.email, value.password)
        .then(() => {
          this.router.navigate(['/admin/products']);
        });
        console.log(resp);
      })
      .catch(error => {
        this.authService.log(`¡Error! ${error.message}`);
      });
    }
  }

  changeTypeOfThePasswordField(): void {
    this.hidePassword = !this.hidePassword;
  }

  get emailField(): AbstractControl {
    return this.form.get('email');
  }

  get passwordField(): AbstractControl {
    return this.form.get('password');
  }

  get repeatPasswordField(): AbstractControl {
    return this.form.get('repeatPassword');
  }

}
