import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { RedisServiceI } from 'src/domain/redis.service.interface';

export class RedisService implements RedisServiceI {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async getAll() {
    return await this.cacheManager.get('notifications');
  }

  getById() {
    return '';
  }

  async save(data) {
    return await this.cacheManager.set('notifications', data);
  }
  update(data: any, id: any) {
    // TODO
  }
}
