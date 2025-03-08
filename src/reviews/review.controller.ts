import { Controller, Get } from '@nestjs/common';
import { Review, ReviewService } from './review.service';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  findAll(): Promise<Review[]> {
    return this.reviewService.findAll();
  }
}
