import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './../controllers/app.controller';

import { AppService } from './../services/app.service';
import { ContactModule } from './contact.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
