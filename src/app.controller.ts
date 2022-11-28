import { Body, Controller, Get, Post } from '@nestjs/common';
import { StorageApp } from './application/storage';

@Controller()
export class AppController {
  constructor(private readonly applicationRedis: StorageApp) {}

  @Get()
  async getAll() {
    const value = this.applicationRedis.getAll();
    return value;
  }

  @Post()
  async save(@Body() data: any) {
    const value = await this.applicationRedis.save(data);
    return value;
  }
}
