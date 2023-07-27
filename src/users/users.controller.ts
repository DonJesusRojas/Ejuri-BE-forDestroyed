import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';

import { Response, Request } from 'express';
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password.toString(),
      12,
    );
    createUserDto.password = hashedPassword;
    const user = await this.usersService.create(createUserDto);
    delete user.password;
    return user;
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (!user) {
      return { message: 'User not found' };
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { message: 'Wrong password' };
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });
    response.cookie('jwt', jwt, { httpOnly: true });
    return { message: 'Success' };
  }
  @Get('user')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }
      const user = await this.usersService.findOneById(data['id']);
      const { password, ...result } = user;
      return result;
    } catch (e) {
      console.log(e.message);
      throw new UnauthorizedException();
    }
  }
  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');
    return { message: 'Success' };
  }
}
