import { ApiProperty } from '@nestjs/swagger';

export class JwtCreateDto {
  @ApiProperty({ example: 'operator1', description: 'Operator username' })
  username: string;

  @ApiProperty({ example: 'password123', description: 'Operator password' })
  password: string;
}
