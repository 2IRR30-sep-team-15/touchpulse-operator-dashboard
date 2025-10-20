import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TouchpulseService } from './touchpulse.service';

@Module({
  imports: [HttpModule],
  providers: [TouchpulseService],
  exports: [TouchpulseService],
})
export class TouchpulseModule {}
