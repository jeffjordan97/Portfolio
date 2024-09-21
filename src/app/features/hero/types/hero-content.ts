export interface HeroContent {
  welcome: string;
  welcome_2: string;
  firstName: string;
  lastName: string;
  roles: string[];
  resumeLink: string;
  imagePath: string;
}

export const heroContent: HeroContent = {
  welcome: 'Hi there,',
  welcome_2: "I'm",
  firstName: 'Jeffrey',
  lastName: 'Jordan',
  roles: [
    'Software Engineer',
    'Web Developer',
    'Backend Engineer',
    'Problem Solver',
  ],
  resumeLink: '',
  imagePath: './assets/images/memoji.png',
};
