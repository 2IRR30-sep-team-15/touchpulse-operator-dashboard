import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TouchpulseModule } from 'src/touchpulse/touchpulse.module';

@Module({
  imports: [TouchpulseModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
