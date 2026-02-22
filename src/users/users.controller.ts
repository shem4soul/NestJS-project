import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //Get all users
  findAll() {
    return 'This action returns all users';
  }

  @Get(':id') //Get user by id
  findOne() {
    return 'This action returns a user by id';
  }

  @Get('interns') //Get all interns
  findAllInterns() {
    return 'This action returns all interns';
  }
}
