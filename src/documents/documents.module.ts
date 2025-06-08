// documents/documents.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { DocumentEntity, DocumentSchema } from './entities/document.entities';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: DocumentEntity.name, schema: DocumentSchema }]),
  ],
  controllers: [DocumentsController],
  providers: [DocumentsService],
})
export class DocumentsModule {}
