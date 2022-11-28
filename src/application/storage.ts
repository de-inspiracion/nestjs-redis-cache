import { Inject, Injectable } from '@nestjs/common';
import { RedisService } from 'src/infra/redis/redis.service';

@Injectable()
export class StorageApp {
  constructor(private redisService: RedisService) {}
  getAll() {
    return this.redisService.getAll();
  }
  getById() {
    return '';
  }

  save(data) {
    return this.redisService.save(data);
  }
  update(data: any, id: any) {
    // TODO
  }
}
