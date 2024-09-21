export interface Review {
  review: string;
  reviewer: string;
  reviewerRole: string;
}

export const reviews: Review[] = [
  {
    review:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
    reviewer: 'Richard Wilson',
    reviewerRole: 'Senior Project Manager',
  },
  {
    review:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”.',
    reviewer: 'Edward Dooley',
    reviewerRole: 'Senior Software Engineer',
  },
  {
    review:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
    reviewer: 'Henry Day',
    reviewerRole: 'Senior Manager - Software Engineering',
  },
];
