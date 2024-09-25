import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'hero',
    loadComponent: () =>
      import('../app/features/hero/hero.component').then(
        (m) => m.HeroComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../app/features/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('../app/features/skills/skills.component').then(
        (m) => m.SkillsComponent
      ),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('../app/features/experience/experience.component').then(
        (m) => m.ExperienceComponent
      ),
  },
  {
    path: 'work',
    loadComponent: () =>
      import('../app/features/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: 'reviews',
    loadComponent: () =>
      import('../app/features/testimonials/testimonials.component').then(
        (m) => m.TestimonialsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../app/features/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
