// ingestion/ingestion.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IngestionService } from './ingestion.service';
import { IngestionController } from './ingestion.controller';
import { Ingestion, IngestionSchema } from './entities/ingestion.entities';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ingestion.name, schema: IngestionSchema }]),
  ],
  controllers: [IngestionController],
  providers: [IngestionService],
})
export class IngestionModule {}
