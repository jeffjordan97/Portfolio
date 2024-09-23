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
      '“Working with Jeff is a seamless experience. His strong problem-solving skills and flexibility make him an invaluable asset to any team. He takes initiative and communicates effectively to deliver solutions”.',
    reviewer: 'Edward Dooley',
    reviewerRole: 'Senior Software Engineer',
  },
  {
    review:
      '“Jeff has proved himself to be a quick learner and does not hesitate to take ownership of tasks. His cross-team collaboration this year has been excellent.”',
    reviewer: 'Henry Day',
    reviewerRole: 'Senior Manager - Software Engineering',
  },
];
