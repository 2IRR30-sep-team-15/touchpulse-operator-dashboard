import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { OperatorsService } from 'src/operators/operators.service';

@Injectable()
export class AuthService {
  constructor(
    private operatorService: OperatorsService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async create(username: string, password: string) {
    const operator = this.operatorService.findByUsername(username);

    console.log(operator);

    if (operator === undefined || operator.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: operator.id, username: operator.username };
    const access_token = await this.jwtService.signAsync(payload);

    return { access_token };
  }

  async verify(token: string) {
    try {
      return await this.jwtService.verifyAsync(token, {
        secret: this.config.get<string>('JWT_SECRET'),
      });
    } catch {
      throw new UnauthorizedException();
    }
  }
}
