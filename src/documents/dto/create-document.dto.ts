import { IsString } from 'class-validator';

export class CreateDocumentDto {
  @IsString()
  title: string;

  @IsString()
  type: string;

  @IsString()
  owner: string;
}