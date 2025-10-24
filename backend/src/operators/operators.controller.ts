import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('operators')
@ApiBearerAuth('access-token')
@Controller('operators')
export class OperatorsController {
  @UseGuards(AuthGuard)
  @Get('me')
  me(@Request() req: Record<string, any>) {
    return req['operator'];
  }
}
