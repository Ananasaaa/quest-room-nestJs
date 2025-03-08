import { Module } from '@nestjs/common';
import { QuestService } from './quest.service';
import { QuestController } from './quest.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [QuestService, PrismaService],
  controllers: [QuestController],
})
export class QuestModule {}
