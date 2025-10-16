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

  async findAll() {
    // Example method to demonstrate service functionality
    return await this.userRepository.search().return.all();
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
