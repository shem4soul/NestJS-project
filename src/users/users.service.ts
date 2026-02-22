import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { create } from 'domain';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@fastermail.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Admin User',
      email: ' admin@code.uba.uk',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'Alice Smith',
      email: 'smith@hotmail.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Bob Johnson',
      email: 'johnson@yahoo.co.uk',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const highestId = usersByHighestId[0].id;
    const newUser = { id: highestId + 1, ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.users.find((user) => user.id === id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
