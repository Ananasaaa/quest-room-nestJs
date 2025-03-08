import { Injectable } from '@nestjs/common';
import { PrismaClient, Review } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ReviewService {
  findAll(): Promise<Review[]> {
    return prisma.review.findMany();
  }
}
export { Review };
