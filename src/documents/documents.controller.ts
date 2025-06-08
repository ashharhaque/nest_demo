import {
    Controller,
    Post,
    Get,
    Put,
    Delete,
    Param,
    Body,
    UseGuards,
    UseInterceptors,
    UploadedFile,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
  import { DocumentsService } from './documents.service';
  import { CreateDocumentDto } from './dto/create-document.dto';
  
  @Controller('documents')
  @UseGuards(JwtAuthGuard)
  export class DocumentsController {
    constructor(private readonly documentsService: DocumentsService) {}
  
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async upload(@UploadedFile() file: Express.Multer.File, @Body() dto: CreateDocumentDto) {
        console.log("File received:", file);
      return this.documentsService.create(dto, file);
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      return this.documentsService.findOne(id);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: CreateDocumentDto) {
      return this.documentsService.update(id, dto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.documentsService.remove(id);
    }
  }