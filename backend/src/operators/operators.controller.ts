import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('operators')
export class OperatorsController {
  @UseGuards(AuthGuard)
  @Get('me')
  me(@Request() req: Record<string, any>) {
    return req['operator'];
  }
}
