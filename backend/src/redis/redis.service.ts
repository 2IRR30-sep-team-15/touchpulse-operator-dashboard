import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit {
  public client: RedisClientType;

  constructor(private config: ConfigService) {}

  async onModuleInit() {
    const redisHost = this.config.get<string>('REDIS_HOST', 'localhost');
    const redisPort = this.config.get<number>('REDIS_PORT', 6379);
    const redisPassword = this.config.get<string>(
      'REDIS_PASSWORD',
      'yourpassword',
    );

    console.log(`Connecting to Redis at ${redisHost}:${redisPort}`);

    // Initialize Redis client here using redisHost and redisPort
    this.client = createClient({
      socket: {
        host: redisHost,
        port: redisPort,
      },
      password: redisPassword,
    });

    this.client.on('error', (err) => console.error('Redis Client Error', err));

    try {
      await this.client.connect();
      console.log('Connected to Redis');
    } catch (err) {
      console.error('Failed to connect to Redis', err);
    }
  }
}
