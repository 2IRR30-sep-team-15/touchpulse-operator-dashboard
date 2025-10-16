import { Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'redis-om';
import { RedisService } from 'src/redis/redis.service';
import { User, userSchema } from './users.schemas';

@Injectable()
export class UsersService implements OnModuleInit {
  private userRepository: Repository<User>;

  constructor(private readonly redis: RedisService) {}

  async onModuleInit() {
    this.userRepository = new Repository<User>(userSchema, this.redis.client);

    await this.userRepository.createIndex();
  }

  async findAll(search?: string) {
    const q = this.userRepository.search();

    if (search && search.length > 1) {
      q.where('email').match(`*${search}*`);
    }

    return await q.returnAll();
  }

  async findById(id: string) {
    return await this.userRepository
      .search()
      .where('id')
      .equals(id)
      .returnFirst();
  }

  async create() {
    const userObj: User = {
      id: 'uuid',
      email: 'thereug6@gmail.com',
      provider: 'google',
      sessions: [],
      created_at: Date.now(),
    };

    return await this.userRepository.save(userObj);
  }
}
