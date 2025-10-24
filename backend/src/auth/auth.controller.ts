import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtCreateDto } from './dto/jwt-create.dto';
import { JwtVerifyDto } from './dto/jwt-verify.dto';

@ApiTags('auth')
@Controller('api/auth/jwt')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('create')
  @ApiOperation({ summary: 'Create JWT for operator' })
  @ApiResponse({ status: 200, description: 'Access token returned' })
  create(@Body() jwtCreateDto: JwtCreateDto) {
    console.log(jwtCreateDto);

    return this.authService.create(
      jwtCreateDto.username,
      jwtCreateDto.password,
    );
  }

  @Post('verify')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Verify a JWT' })
  @ApiResponse({ status: 200, description: 'Token is valid' })
  async verify(@Body() jwtVerifyDto: JwtVerifyDto) {
    return await this.authService.verify(jwtVerifyDto.token);
  }
}
