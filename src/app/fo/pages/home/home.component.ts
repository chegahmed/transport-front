import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactForm} from '../dto/ContactForm';
import {EmailService} from '../../../services/EmailService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  // displayContactForm: boolean = true;
   displayError = false;



  constructor(  private _fb: FormBuilder, private emailService: EmailService) { }

  ngOnInit(): void {
    this.createContactFormGroup();
  }

  createContactFormGroup() {
    this.contactForm = this._fb.group({
      contactSubject: ['', [Validators.required]],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactMessage: ['', [Validators.required]],
    });
  }

  sendForm() {
     this.submitted = true;
    // console.log(this.contactForm.value);
     if (this.contactForm.valid) {
      const requestObject: ContactForm = this.contactForm.value;
     // requestObject.currentUrl = window.location.host; // window.location.href;
      this.emailService.sendMail(requestObject).subscribe((response: boolean) => {
        console.log('response : ', response);
        if (response) {
          this.displayError = false;
        } else {
          this.displayError = true;
        }
      });

    }
  }

}
