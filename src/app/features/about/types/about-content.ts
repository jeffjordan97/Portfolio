export interface AboutHeaderCard {
  icon: string;
  title: string;
  description: string;
}

export const aboutHeaderCards: AboutHeaderCard[] = [
  {
    icon: 'pi pi-pencil',
    title: 'Design',
    description:
      'Blueprint for architecture, user interfaces, and technical requirements.',
  },
  {
    icon: 'pi pi-code',
    title: 'Develop',
    description:
      'Building the core features and functionality to create the software.',
  },
  {
    icon: 'pi pi-desktop',
    title: 'Deploy',
    description:
      'Releasing the developed software to the production environment.',
  },
  {
    icon: 'pi pi-cog',
    title: 'Support',
    description:
      'Maintaining software post-deployment, addressing bugs, and providing updates.',
  },
];
