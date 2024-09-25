import {
  angular,
  azure,
  bootstrap,
  css,
  docker,
  git,
  html,
  java,
  jenkins,
  kubernetes,
  maven,
  npm,
  primeNg,
  rancher,
  spinnaker,
  springBoot,
  Technology,
  typeScript,
} from '../../../shared/types/technology';

export interface Project {
  name: string;
  description: string;
  technologies: Technology[];
  duration: string;
}

export const projects: Project[] = [
  {
    name: 'WMS Platform Modernization',
    description:
      "Produced RESTful Java services as part of an agile team in supporting with a large-scale platform modernization of QVC UK's warehouse management system, a multi-million pound project.",
    technologies: [
      java,
      springBoot,
      git,
      maven,
      azure,
      kubernetes,
      docker,
      jenkins,
      rancher,
    ],
    duration: '18 months',
  },
  {
    name: 'Marketing Preferences Interface',
    description:
      'Curated a simple web application for CS support to update the marketing preferences of QVC UK’s customers, leading architectural decisions and stakeholder discussions.',
    technologies: [angular, typeScript, html, css, bootstrap],
    duration: '4 months',
  },
  {
    name: 'Dropship Management System',
    description:
      'Created Java services with an Angular UI as part of an agile team, utilizing CI/CD pipelines, to implement a dropshipping solution for QVC UK.',
    technologies: [java, springBoot, angular, spinnaker, rancher],
    duration: '12 months',
  },
];
