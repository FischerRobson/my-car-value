import { Body, Controller, Post, Get, Patch, Delete, Param, Query, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDTO } from './dtos/update-user.dto';
@Controller('/auth')
export class UsersController {

  constructor(private service: UsersService) { 
  }

  @Post('/signup')
  async createUser(@Body() body: CreateUserDTO) { 
    const { email, password } = body;

    const user = await this.service.create(email, password);
    return user;
  }

  @Get('/:id')
  async findUser(@Param('id') id: string) { 
    const user = await this.service.findOne(Number(id));
    if (!user) throw new NotFoundException('User not found')
    return user
  }

  @Get()
  findAllUser(@Query('email') email: string) { 
    return this.service.find(email);
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDTO) {
    return this.service.update(Number(id), body);
  }

  @Delete(`/:id`)
  deleteUser(@Param('id') id: string) { 
    return this.service.remove(Number(id));
  }
}
