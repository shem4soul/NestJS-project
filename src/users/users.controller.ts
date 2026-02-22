import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get() //GET /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  //   @Get('interns') //Get all interns
  //   findAllInterns() {
  //     return [];
  //   }

  @Get(':id') //Get user by id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post() //Create a new user
  create(
    @Body(ValidationPipe)
    createUserDto: CreateUserDto,
  ) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id') //PATCH / users/:id
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDTO: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDTO);
  }

  @Delete(':id') //DELETE /users/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
