import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UsersService } from './users.service';
@Controller('auth')
export class UsersController {

  constructor(private service: UsersService) { 
  }

  @Post('/signup')
  async createUser(@Body() body: CreateUserDTO) { 
    const { email, password } = body;

    const user = this.service.create(email, password);
    return user;
  }
}
