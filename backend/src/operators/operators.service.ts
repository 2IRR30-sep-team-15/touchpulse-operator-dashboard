import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

interface Operator {
  id: string;
  username: string;
  password: string;
}

@Injectable()
export class OperatorsService {
  private operators: Operator[];

  constructor(private readonly config: ConfigService) {
    const raw = this.config.get<string>('OPERATORS') ?? '[]';
    this.operators = JSON.parse(raw) as Operator[];

    console.log(this.operators);
  }

  findByUsername(username: string) {
    return this.operators.find((operator) => operator.username === username);
  }
}
