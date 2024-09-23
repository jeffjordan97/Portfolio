import { Component, ElementRef, HostListener } from '@angular/core';
import { Role, roles } from './types/roles';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  roles: Role[] = roles;

  items!: HTMLElement[];
  timelineHeight!: number;
  defaultLine!: HTMLElement | null;
  drawLine!: HTMLElement | null;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.items = Array.from(
      this.elementRef.nativeElement.querySelectorAll('.timeline li')
    ) as HTMLElement[];
    this.timelineHeight =
      this.elementRef.nativeElement.querySelector('.timeline ul')
        ?.offsetHeight || 0;
    this.defaultLine =
      this.elementRef.nativeElement.querySelector('.default-line');
    this.drawLine = this.elementRef.nativeElement.querySelector('.draw-line');

    if (this.drawLine) {
      this.onScroll(); // Initial call for scroll positioning
    }
  }

  // Listen to window scroll event
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.drawLine || !this.defaultLine) return;

    const defaultLineHeight = this.defaultLine.offsetHeight;
    const scrollY = window.scrollY;

    // Distance from the top of the timeline to the top of the window
    const timelineTop =
      this.elementRef.nativeElement
        .querySelector('.timeline')
        ?.getBoundingClientRect().top || 0;

    // Draw the line if 20% of the timeline is in the viewport, meaning the top of the timeline to the top of the viewport window is less than 80% of the window height
    if (timelineTop < window.innerHeight * 0.8) {
      let line = window.innerHeight * 0.8 - timelineTop;
      if (line <= defaultLineHeight) {
        this.drawLine.style.height = line + 'px';
      }
      if (line > defaultLineHeight) {
        this.drawLine.style.height = defaultLineHeight + 'px';
      }

      // Check when to add 'in-view' class to timeline li elements
      const bottom =
        this.drawLine.getBoundingClientRect().top + this.drawLine.offsetHeight;
      this.items.forEach((item: HTMLElement) => {
        const logoPositionTop = item.getBoundingClientRect().top;
        const logoPositionBottom = item.getBoundingClientRect().bottom;
        const logoPositionToCenter = (logoPositionBottom - logoPositionTop) / 2;

        if (bottom > logoPositionTop + logoPositionToCenter) {
          item.classList.add('in-view');
        } else {
          item.classList.remove('in-view');
        }
      });
    } else {
      // Timeline is not in the viewport, do not draw the line
      this.drawLine.style.height = '0px'; // Reset the progress line
      this.items.forEach((item: HTMLElement) => {
        item.classList.remove('in-view');
      });
    }
  }
}
