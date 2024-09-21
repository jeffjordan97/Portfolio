import { Component } from '@angular/core';
import {
  SocialMediaLinks,
  socialMediaLinks,
} from '../../features/hero/types/social-media-links';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  socialMediaLinks: SocialMediaLinks = socialMediaLinks;
}
