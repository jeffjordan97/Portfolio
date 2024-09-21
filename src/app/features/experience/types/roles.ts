export interface Role {
  name: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
}

export const roles: Role[] = [
  {
    name: 'Software Engineer',
    company: 'QVC UK',
    startDate: '2020',
    endDate: '2024',
    description:
      'Designing, developing, and deploying a range of applications to support with QVC UK supply chain operations.',
    image: 'assets/images/QVC-logo.svg',
  },
  {
    name: 'Web Developer',
    company: 'Very',
    startDate: '2018',
    endDate: '2019',
    description:
      'Frontend developer in the BAU content team, producing responsive webpages for Very and Littlewoods.',
    image: 'assets/images/Very-logo.png',
  },
  {
    name: 'Hospitality Waiting Staff',
    company: 'Liverpool FC',
    startDate: '2017',
    endDate: '2018',
    description:
      'Match-day hospitality staff member at Liverpool football club, supporting with customer care.',
    image: 'assets/images/Liverpool_FC-logo.svg',
  },
  {
    name: 'Student',
    company: 'University of Liverpool',
    startDate: '2016',
    endDate: '2020',
    description:
      'Student at the University of Liverpool studying Computer Science. Achieved a first class honours BSc degree.',
    image: 'assets/images/UoL-logo.svg',
  },
  {
    name: 'Sales Assistant',
    company: 'Next',
    startDate: '2015',
    endDate: '2016',
    description:
      'Part-time sales assistant, supporting with customer care and stock management.',
    image: 'assets/images/Next-logo.jpg',
  },
];
