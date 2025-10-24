import { ApiProperty } from '@nestjs/swagger';

export class JwtVerifyDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', description: 'JWT to verify' })
  token: string;
}
