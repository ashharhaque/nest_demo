import { IsString } from 'class-validator';

export class TriggerIngestionDto {
  @IsString()
  documentId: string;

  @IsString()
  triggeredBy: string;
}