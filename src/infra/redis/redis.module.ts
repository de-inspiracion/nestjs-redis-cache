import type { ClientOpts } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import { CacheModule, CACHE_MANAGER, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
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
  providers: [RedisService],
  exports: [RedisService, CacheModule],
})
export class RedisModule {}
