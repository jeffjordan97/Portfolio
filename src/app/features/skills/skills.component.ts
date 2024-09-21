import { Component } from '@angular/core';
import {
  cloudDevOps,
  frameworksAndTools,
  languages,
  otherTechnologies,
  Technology,
} from '../../shared/types/technology';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  languages: Technology[] = languages;
  frameworksAndTools: Technology[] = frameworksAndTools;
  cloudDevOps: Technology[] = cloudDevOps;
  otherTechnologies: Technology[] = otherTechnologies;
}
