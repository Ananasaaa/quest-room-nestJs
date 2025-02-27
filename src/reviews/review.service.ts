import { Injectable } from '@nestjs/common';

export type Reviews = {
  id: number;
  author: string;
  text: string;
  rating: number;
};

@Injectable()
export class ReviewService {
  private readonly reviews: Reviews[] = [
    {
      id: 1,
      author: 'Lola',
      text: "I had an unforgettable experience at the escape room! The puzzles were challenging but fun, and the storyline kept me on the edge of my seat the whole time. The staff was very friendly and helped create a fantastic atmosphere. It's a great activity for team building or a group of friends. I highly recommend this place for anyone looking for a bit of adventure and mystery!",
      rating: 5,
    },
    {
      id: 2,
      author: 'Maria',
      text: 'Fun puzzles and a fantastic theme. Really enjoyed the challenge and teamwork involved. Highly recommend!',
      rating: 4,
    },
    {
      id: 3,
      author: 'Alex',
      text: 'The room felt cramped, and the puzzles didn’t flow well. It could be better with some improvements.',
      rating: 2,
    },
  ];

  findAll(): Promise<Reviews[]> {
    return Promise.resolve(this.reviews);
  }
}
