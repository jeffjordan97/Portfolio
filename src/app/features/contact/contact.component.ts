import { Component, OnInit } from '@angular/core';
import {
  SocialMediaLinks,
  socialMediaLinks,
} from '../hero/types/social-media-links';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MailService } from '../../core/services/mail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  socialMediaLinks: SocialMediaLinks = socialMediaLinks;

  contactForm!: FormGroup;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private mailService: MailService) {
    // Initialize the form group with validation rules
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  // This function is called on form submission
  onSubmit() {
    console.log('Form Valid = ', this.contactForm.valid);
    if (this.contactForm.valid) {
      // this.sendEmail();
      this.formSubmitted = true;
      this.contactForm.reset();
      console.log('Sent form: ' + this.contactForm);
    } else {
      this.markFormControlsAsTouched();
    }
  }

  // Mark all form controls as touched
  private markFormControlsAsTouched() {
    Object.keys(this.contactForm.controls).forEach((field) => {
      const control = this.contactForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  // Your sendEmail function
  async sendEmail() {
    const formDataRaw = this.contactForm.value;
    console.log('Form Data:', formDataRaw);
    // Add your email sending logic here

    let formData: FormData = new FormData();
    formData.append('name', this.contactForm.get('name')?.value);
    formData.append('email', this.contactForm.get('email')?.value);
    formData.append('body', this.contactForm.get('message')?.value);
    // -- email customization
    // formData.append('access_key', environment.form_access_key);
    formData.append('access_key', '6771287c-db52-4103-9b34-b23cadb0648e');
    formData.append('subject', 'Portfolio Website - Contact Form Submission');
    formData.append('from_name', this.contactForm.get('name')?.value);

    try {
      // -- send email
      const res = await this.mailService.sendEmail(formData);
      if (!res.ok) {
        throw new Error();
      }
      console.log('Email sent successfully!');
      this.formSubmitted = true;
      this.contactForm.reset();
    } catch (err) {
      // handle error
      console.log('Something went wrong, try again!');
    }
  }
}
