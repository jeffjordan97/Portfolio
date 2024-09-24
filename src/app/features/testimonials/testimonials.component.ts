import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
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

  constructor(private elementRef: ElementRef) {}

  reviewCards!: HTMLElement[];

  ngAfterViewInit(): void {
    this.reviewCards = Array.from(
      this.elementRef.nativeElement.querySelectorAll('#testimonials .review')
    ) as HTMLElement[];
  }

  // Listen to window scroll event
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.reviewCards.forEach((reviewCard: HTMLElement) => {
      const cardTop = reviewCard.getBoundingClientRect().top;

      if (window.innerHeight * 0.8 > cardTop) {
        reviewCard.classList.add('slideUpFadeIn');
      }
    });
  }
}
