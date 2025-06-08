import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DocumentEntity, DocumentDocument } from './entities/document.entities';
import { CreateDocumentDto } from './dto/create-document.dto';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel(DocumentEntity.name) private documentModel: Model<DocumentDocument>,
  ) {}

  async create(dto: CreateDocumentDto, file: Express.Multer.File) {
    try{
        const fileUrl = `/uploads/${file.filename}`;
        return this.documentModel.create({ ...dto, fileUrl });
    }catch(err){
     console.log("err in file upload", err);
    }
   
  }

  async findOne(id: string) {
    const doc = await this.documentModel.findById(id);
    if (!doc) throw new NotFoundException('Document not found');
    return doc;
  }

  async update(id: string, dto: CreateDocumentDto) {
    return this.documentModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async remove(id: string) {
    return this.documentModel.findByIdAndDelete(id);
  }
}