import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //Get all users
  findAll() {
    return 'This action returns all users';
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
