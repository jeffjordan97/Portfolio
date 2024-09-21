import { Component } from '@angular/core';
import { Project, projects } from './types/project';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Technology } from '../../shared/types/technology';
import {
  animate,
  AUTO_STYLE,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
const DEFAULT_DURATION = 300;
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out')),
    ]),
  ],
})
export class ProjectsComponent {
  projects: Project[] = projects;

  onTechnologyClick(project: any, technology: any) {
    // If the same technology is clicked again, deselect it
    if (project.selectedTechnology === technology) {
      project.selectedTechnology = null;
    } else {
      // Set the selected technology for the project
      project.selectedTechnology = technology;
    }
  }
}
