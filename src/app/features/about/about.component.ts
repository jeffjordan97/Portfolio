import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeaderCard, aboutHeaderCards } from './types/about-content';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  aboutHeaderCards: AboutHeaderCard[] = aboutHeaderCards;
}
