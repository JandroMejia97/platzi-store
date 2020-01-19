import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Contact } from '../models/contact.model';
import { MessageService } from './message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private router: Router,
    private messageService: MessageService,
    private afDatabase: AngularFireDatabase,
  ) { }

  postContact(object: Contact) {
    const ref = this.afDatabase.database.ref('contacts').push();
    ref.set(object);
    this.log('Your message was sent successfully. Thanks.');
    this.router.navigate(['/home']);
  }

  log(mensaje: string): void {
    this.messageService.openSnackBar(`${mensaje}`);
  }
}
