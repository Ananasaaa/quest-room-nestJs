import { Controller, Get } from '@nestjs/common';
import { Genre, GenreService } from './genre.service';

@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  findAll(): Promise<Genre[]> {
    return this.genreService.findAll();
  }
}
