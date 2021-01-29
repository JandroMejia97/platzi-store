import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
      password: ['', [Validators.required, Validators.pattern(/(?!^\d+$)^.+$/)]]
    });
  }

  submitSignUp(): void {
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.signUp(value.email, value.password)
      .then(() => {
        this.router.navigate(['/admin/products']);
      })
      .catch(error => {
        this.authService.log(`¡Error! ${error.message}`);
      });
    }
  }

  changeTypeOfThePasswordField(): void {
    this.hidePassword = !this.hidePassword;
  }

}
