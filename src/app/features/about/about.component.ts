import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeaderCard, aboutHeaderCards } from './types/about-content';
import { Utils } from '../../core/utils/utils';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  aboutHeaderCards: AboutHeaderCard[] = aboutHeaderCards;

  constructor(private elementRef: ElementRef) {}

  aboutCards!: HTMLElement[];

  ngAfterViewInit(): void {
    this.aboutCards = Array.from(
      this.elementRef.nativeElement.querySelectorAll('#about .card')
    ) as HTMLElement[];

    this.animateAboutCards();
  }

  // Listen to window scroll event
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.animateAboutCards();
  }

  // Add animation class to about cards
  animateAboutCards(): void {
    const isSmallScreen = window.innerWidth < 575.98;
    const animationClass = isSmallScreen
      ? 'slideDownFadeIn'
      : 'slideInLeftFadeIn';

    this.aboutCards.forEach((project: HTMLElement) => {
      const projectTop = project.getBoundingClientRect().top;

      if (window.innerHeight * 0.9 > projectTop) {
        if (window.innerHeight * 0.9 > projectTop) {
          Utils.addAnimationClass(project, animationClass);
        }
      }
    });
  }
}
