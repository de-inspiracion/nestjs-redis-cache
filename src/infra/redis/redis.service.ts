import { Injectable } from '@nestjs/common';
import { RedisServiceI } from 'src/domain/redis.service.interface';

export class RedisService implements RedisServiceI {
  getAll() {
    return 'getall';
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
