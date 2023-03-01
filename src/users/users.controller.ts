import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
@Controller('auth')
export class UsersController {

  @Post('/signup')
  async createUser(@Body() body: CreateUserDTO) { 
    const { email, password } = body;
  }
}
