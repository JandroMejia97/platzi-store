import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://platzi-store.herokuapp.com/auth';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private angularAuth: AngularFireAuth,
    private messageService: MessageService
  ) { }

  signIn(email: string, password: string) {
    return this.angularAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signUp(email: string, password: string) {
    return this.angularAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.angularAuth.auth.signOut();
  }

  loginRestApi(email: string, password: string) {
    return this.http.post(this.apiUrl, {email, password})
      .pipe(
        tap((data: any) => this.tokenService.saveToken(data.token))
      );
  }

  hasUser() {
    return this.angularAuth.authState;
  }

  log(mensaje: string): void {
    this.messageService.openSnackBar(`${mensaje}`);
  }

}
