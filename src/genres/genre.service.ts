import { Injectable } from '@nestjs/common';
import { PrismaClient, Genre } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class GenreService {
  async findAll(): Promise<Genre[]> {
    return prisma.genre.findMany();
  }
}
export { Genre };
