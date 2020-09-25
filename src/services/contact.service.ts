import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { ContactEntity } from './../entities/contact.entity';

@Injectable()
export class ContactService extends TypeOrmCrudService<ContactEntity> {
  constructor(@InjectRepository(ContactEntity) repo) {
    super(repo);
  }
}
