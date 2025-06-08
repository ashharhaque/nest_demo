import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DocumentEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  owner: string;

  @Prop()
  fileUrl: string;
}

export type DocumentDocument = DocumentEntity & Document;
export const DocumentSchema = SchemaFactory.createForClass(DocumentEntity);