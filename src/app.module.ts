import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { RedisModule } from './infra/redis/redis.module';
import { StorageApp } from './application/storage';

@Module({
  imports: [RedisModule],
  controllers: [AppController],
  providers: [AppService, StorageApp],
})
export class AppModule {}
