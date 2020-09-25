import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContactEntity } from './../entities/contact.entity';
import { ContactService } from './../services/contact.service';
import { ContactController } from './../controllers/contact.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity])],
  providers: [ContactService],
  exports: [ContactService],
  controllers: [ContactController],
})
export class ContactModule {}
