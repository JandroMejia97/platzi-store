import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
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

  hasUser() {
    return this.angularAuth.authState;
  }

  log(mensaje: string): void {
    this.messageService.openSnackBar(`${mensaje}`);
  }

}
