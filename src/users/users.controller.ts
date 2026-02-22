import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get() //GET /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  //   @Get('interns') //Get all interns
  //   findAllInterns() {
  //     return [];
  //   }

  @Get(':id') //Get user by id
  findOne(@Param('id') id: string) {
    return 'This action returns a user by id';
  }

  @Post() //Create a new user
  create(@Body() user: {}) {
    return 'This action creates a new user';
  }

  @Patch(':id') //PATCH / users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') //DELETE /users/:id
  delete(@Param('id') id: string) {
    return 'This action returns a user by id';
  }
}
