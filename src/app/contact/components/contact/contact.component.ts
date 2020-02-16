import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { ContactService } from '@core/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {
    this.generateForm();
  }

  ngOnInit() {
  }

  generateForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [
        Validators.required,
        Validators.minLength(30),
        Validators.maxLength(250)
      ]]
    });
  }

  sendForm() {
    const data = this.contactForm.value;
    this.contactService.postContact(data);
  }

}
