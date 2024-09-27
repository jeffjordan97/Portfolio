export interface Review {
  review: string;
  reviewer: string;
  reviewerRole: string;
}

export const reviews: Review[] = [
  {
    review:
      '“Jeff consistently demonstrates exceptional communication and collaboration skills. His ability to clearly articulate technical concepts and actively engage with stakeholders has been invaluable.”',
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
      "“Jeff has proved himself to be a quick learner. I'm impressed that his motivation was not only to expedite approval of PRs and reduce lead time, but to also to learn from studying the code of others.”",
    reviewer: 'Henry Day',
    reviewerRole: 'Senior Manager - Software Engineering',
  },
  {
    review:
      "“Jeff's passion for learning is evident in his ability to quickly pick up new technologies, no matter how daunting they may seem. His eagerness to tackle new challenges has made him a standout member of the team.”",
    reviewer: 'Vinny Hassell',
    reviewerRole: 'Senior Software Engineer',
  },
];
