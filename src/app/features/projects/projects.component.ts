import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';
import { Project, projects } from './types/project';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements AfterViewInit {
  projects: Project[] = projects;

  constructor(private elementRef: ElementRef) {}

  projectCards!: HTMLElement[];

  ngAfterViewInit(): void {
    this.projectCards = Array.from(
      this.elementRef.nativeElement.querySelectorAll('.project')
    ) as HTMLElement[];
  }

  // Listen to window scroll event
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.projectCards.forEach((project: HTMLElement) => {
      const projectTop = project.getBoundingClientRect().top;

      if (window.innerHeight * 0.8 > projectTop) {
        project.classList.add('slideUpFadeIn');
      }
    });
  }
}
