import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationRedis } from './application/application';
import { RedisService } from './infra/redis/redis.service';
import { Cache } from 'cache-manager';
import type { ClientOpts } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import { CacheModule, Module } from '@nestjs/common';

@Module({
  imports: [
    CacheModule.register<ClientOpts>({
      store: redisStore,
      // Store-specific configuration:
      host: 'localhost',
      port: 6379,
      ttl: 2400,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
