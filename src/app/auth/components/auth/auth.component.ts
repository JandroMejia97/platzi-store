import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
// import { StorageService } from 'src/app/services/storage.service';
// import { LoginObject } from 'src/app/models/login-object';
// import { Session } from 'src/app/models/session';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  submitSignIn(): void {
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.signIn(value.email, value.password)
      .then(resp => {
        console.log(resp);
        this.submitSignUp();
      })
      .catch(error => {
        this.authService.log(`¡Error! ${error.message}`);
      });
    }
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

  private correctLogin(data: any) {
    // this.storageService.setCurrentSession(data);
    // this.router.navigate(['canchas']);
  }

}