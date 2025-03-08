import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Quest } from '@prisma/client';

@Injectable()
export class QuestService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Quest[]> {
    return this.prisma.quest.findMany();
  }

  async findOne(id: number): Promise<Quest> {
    const quest = await this.prisma.quest.findUnique({
      where: { id },
    });
    if (!quest) {
      throw new NotFoundException(`Quest with ID ${id} is not found`);
    }
    return quest;
  }
}
export { Quest };
