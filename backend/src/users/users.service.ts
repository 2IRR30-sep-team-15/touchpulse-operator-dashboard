import { Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'redis-om';
import { RedisService } from 'src/redis/redis.service';
import { userSchema } from './users.schema';
import { TouchpulseService } from 'src/touchpulse/touchpulse.service';
import { User } from 'src/interfaces/User';

@Injectable()
export class UsersService implements OnModuleInit {
  private userRepository: Repository<User>;

  constructor(
    private readonly redis: RedisService,
    private readonly touchpulseService: TouchpulseService,
  ) {}

  async onModuleInit() {
    this.userRepository = new Repository<User>(userSchema, this.redis.client);

    await this.userRepository.dropIndex();
    await this.userRepository.createIndex();
  }

  async findAll(search?: string) {
    const q = this.userRepository.search();

    if (search && search.length > 1) {
      q.where('nickname').match(`*${search}*`);
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

  async sync() {
    const users: User[] = await this.touchpulseService.getUsers();

    // 1. remove all user entries
    await this.userRepository.remove(
      await this.userRepository.search().return.allIds(),
    );

    // 2. insert newly fetched user entries
    await Promise.all(
      users.map(async (userData) => {
        await this.userRepository.save(userData);
      }),
    );
  }
}
