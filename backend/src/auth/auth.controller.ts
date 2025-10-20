import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtCreateDto } from './dto/jwt-create.dto';
import { JwtVerifyDto } from './dto/jwt-verify.dto';

@Controller('auth/jwt')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('create')
  create(@Body() jwtCreateDto: JwtCreateDto) {
    console.log(jwtCreateDto);

    return this.authService.create(
      jwtCreateDto.username,
      jwtCreateDto.password,
    );
  }

  @Post('verify')
  @HttpCode(HttpStatus.OK)
  async verify(@Body() jwtVerifyDto: JwtVerifyDto) {
    return await this.authService.verify(jwtVerifyDto.token);
  }
}
