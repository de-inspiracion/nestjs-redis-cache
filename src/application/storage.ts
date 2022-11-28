import { Inject, Injectable } from '@nestjs/common';
import { RedisServiceI } from 'src/domain/redis.service.interface';

@Injectable()
export class StorageApp {
  constructor(@Inject('redisRepository') private redisService: RedisServiceI) {}
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
