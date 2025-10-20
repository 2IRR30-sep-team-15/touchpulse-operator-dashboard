import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { RedisModule } from './redis/redis.module';
import { TouchpulseModule } from './touchpulse/touchpulse.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule,
    UsersModule,
    TouchpulseModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
