import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ingestion, IngestionDocument } from './entities/ingestion.entities';
import { TriggerIngestionDto } from './dto/trigger-ingestion.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class IngestionService {
  constructor(
    @InjectModel(Ingestion.name) private ingestionModel: Model<IngestionDocument>,
  ) {}

  async trigger(dto: TriggerIngestionDto) {
    const ingestion = new this.ingestionModel({
      ...dto,
      status: 'pending',
      jobId: randomUUID(),
    });
    await ingestion.save();

    // Here you would normally emit an event or call Python microservice
    return ingestion;
  }

  async getStatus(id: string) {
    return this.ingestionModel.findById(id);
  }
}