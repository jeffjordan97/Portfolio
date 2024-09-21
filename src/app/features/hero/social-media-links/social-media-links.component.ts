import { Component } from '@angular/core';
import {
  socialMediaLinks,
  SocialMediaLinks,
} from '../types/social-media-links';

@Component({
  selector: 'app-social-media-links',
  standalone: true,
  imports: [],
  templateUrl: './social-media-links.component.html',
  styleUrl: './social-media-links.component.scss',
})
export class SocialMediaLinksComponent {
  socialMediaLinks: SocialMediaLinks = socialMediaLinks;
}
