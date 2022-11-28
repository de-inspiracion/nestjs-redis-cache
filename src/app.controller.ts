import {
  Body,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  Post,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { ApplicationRedis } from './application/application';

@Controller()
export class AppController {
  constructor(
    // private readonly applicationRedis: ApplicationRedis,
    // @Inject('GREETING_SERVICE') private client: ClientProxy,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get()
  async getAll() {
    const value = await this.cacheManager.get('notifications');
    return value;
  }

  @Post()
  async save(@Body() data: any) {
    const value = await this.cacheManager.set('notifications', data);
    return value;
  }
}
