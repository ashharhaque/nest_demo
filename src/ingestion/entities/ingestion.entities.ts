import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Ingestion {
  @Prop({ required: true })
  documentId: string;

  @Prop({ required: true })
  triggeredBy: string;

  @Prop({ required: true })
  status: 'pending' | 'in_progress' | 'completed' | 'failed';

  @Prop({ required: true, unique: true })
  jobId: string;
}

export type IngestionDocument = Ingestion & Document;
export const IngestionSchema = SchemaFactory.createForClass(Ingestion);