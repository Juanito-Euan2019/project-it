import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { from } from 'rxjs';

import { AppController } from './../controllers/app.controller';

import { AppService } from './../services/app.service';
import { ContactModule } from './contact.module';
import { ProfileModule } from './profile.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ContactModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
