import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Query,
} from '@nestjs/common';
import { CommunicationService } from './communication.service';

@Controller('api/communication')
export class CommunicationController {
  constructor(private readonly communicationService: CommunicationService) {}

  @Get()
  test() {
    return 'communication';
  }

  @Get('token')
  async getToken(
    @Query('room') room: string,
    @Query('username') username: string,
  ) {
    if (!room) {
      throw new BadRequestException('Missing "room" query parameter');
    }

    if (!username) {
      throw new BadRequestException('Missing "username" query parameter');
    }

    const token = await this.communicationService.getToken(room, username);
    return { token };
  }
}
