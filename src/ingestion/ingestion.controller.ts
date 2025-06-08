import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { IngestionService } from './ingestion.service';
import { TriggerIngestionDto } from './dto/trigger-ingestion.dto';

@Controller('ingestion')
export class IngestionController {
  constructor(private readonly ingestionService: IngestionService) {}

  @Post('trigger')
  trigger(@Body() dto: TriggerIngestionDto) {
    return this.ingestionService.trigger(dto);
  }

  @Get('status/:id')
  getStatus(@Param('id') id: string) {
    return this.ingestionService.getStatus(id);
  }
}