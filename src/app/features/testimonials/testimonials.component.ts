import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Review, reviews } from './types/review';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  reviews: Review[] = reviews;
}
