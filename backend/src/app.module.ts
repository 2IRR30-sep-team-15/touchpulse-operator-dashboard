import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { RedisModule } from './redis/redis.module';
import { AuthModule } from './auth/auth.module';
import { OperatorsService } from './operators/operators.service';
import { OperatorsController } from './operators/operators.controller';
import { TouchpulseModule } from './touchpulse/touchpulse.module';
import { CommunicationModule } from './communication/communication.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule,
    UsersModule,
    AuthModule,
    TouchpulseModule,
    CommunicationModule,
  ],
  controllers: [AppController, OperatorsController],
  providers: [OperatorsService],
})
export class AppModule {}
