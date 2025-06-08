import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DocumentEntity {

  @Prop()
  fileUrl: string;
}

export type DocumentDocument = DocumentEntity & Document;
export const DocumentSchema = SchemaFactory.createForClass(DocumentEntity);