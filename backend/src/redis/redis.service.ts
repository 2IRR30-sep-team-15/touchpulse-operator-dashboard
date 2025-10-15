import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService {
  private redisClient: RedisClientType;

  constructor(private config: ConfigService) {
    const redisHost = this.config.get<string>('REDIS_HOST');
    const redisPort = this.config.get<number>('REDIS_PORT');

    const redisPassword = this.config.get<string>('REDIS_PASSWORD');
    console.log(`Connecting to Redis at ${redisHost}:${redisPort}`);
    // Initialize Redis client here using redisHost and redisPort
    this.redisClient = createClient({
      socket: {
        host: redisHost,
        port: redisPort,
      },
      password: redisPassword,
    });

    this.redisClient.on('error', (err) =>
      console.error('Redis Client Error', err),
    );

    this.redisClient
      .connect()
      .then(() => {
        console.log('Connected to Redis');
      })
      .catch((err) => {
        console.error('Failed to connect to Redis', err);
      });
  }
}
