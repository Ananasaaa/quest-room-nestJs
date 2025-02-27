import { Controller, Get } from '@nestjs/common';
import { Reviews, ReviewService } from './review.service';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  findAll(): Promise<Reviews[]> {
    return this.reviewService.findAll();
  }
}
