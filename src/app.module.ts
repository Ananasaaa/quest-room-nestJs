import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quests/quest.module';
import { OrderModule } from './orders/order.module';
import { GenreModule } from './genres/genre.module';
import { ReviewModule } from './reviews/review.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [QuestModule, OrderModule, GenreModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
