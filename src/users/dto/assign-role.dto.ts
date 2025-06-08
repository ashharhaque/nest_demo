import { IsString } from 'class-validator';

export class AssignRoleDto {
  @IsString()
  username: string;

  @IsString()
  role: string;
}