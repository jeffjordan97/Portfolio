import { Component } from '@angular/core';
import {
  SocialMediaLinks,
  socialMediaLinks,
} from '../hero/types/social-media-links';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  socialMediaLinks: SocialMediaLinks = socialMediaLinks;
}
