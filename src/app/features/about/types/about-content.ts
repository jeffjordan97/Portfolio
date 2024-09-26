export interface AboutHeaderCard {
  icon: string;
  title: string;
  description: string;
}

export const aboutHeaderCards: AboutHeaderCard[] = [
  {
    icon: 'pi pi-pen-to-square',
    title: 'Design',
    description:
      'Blueprints for architecture, user interfaces, and technical requirements.',
  },
  {
    icon: 'pi pi-code',
    title: 'Develop',
    description:
      'Building the core features and functionality to create the software.',
  },
  {
    icon: 'pi pi-download',
    title: 'Deploy',
    description:
      'Preparing, packaging and releasing software to the production environment.',
  },
  {
    icon: 'pi pi-wrench',
    title: 'Support',
    description:
      'Maintaining software, addressing bugs, and providing updates.',
  },
];
