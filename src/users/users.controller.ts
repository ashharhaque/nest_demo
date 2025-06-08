import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from './../auth/guards/roles.guards';
import { Roles } from './../auth/decorators/roles.decorator';
import { AssignRoleDto } from './dto/assign-role.dto';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @Roles('admin')
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Post('assign-role')
  @Roles('admin')
  assignRole(@Body() dto: AssignRoleDto) {
    return this.usersService.assignRole(dto);
  }
}