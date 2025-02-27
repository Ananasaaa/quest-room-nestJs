import { Controller, Get, Param } from '@nestjs/common';
import { QuestService, Quest } from './quest.service';

@Controller('quests')
export class QuestController {
  constructor(private readonly questService: QuestService) {}

  @Get()
  findAll(): Promise<Quest[]> {
    return this.questService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Quest | undefined> {
    return this.questService.findOne(id);
  }
}
