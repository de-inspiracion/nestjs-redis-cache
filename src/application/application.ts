import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/infra/redis/redis.service';

@Injectable()
export class ApplicationRedis {
  constructor(private redisService: RedisService) {}
  getAll() {
    return this.redisService.getAll();
  }
  getById() {
    return '';
  }

  save(data) {
    // TOD
  }
  update(data: any, id: any) {
    // TODO
  }
}
