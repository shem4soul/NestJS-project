import { Injectable } from '@nestjs/common';

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
}
