import { from } from 'rxjs';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { ContactEntity } from './../entities/contact.entity';
import { ContactService } from './../services/contact.service';

@Crud({
  model: {
    type: ContactEntity,
  },
})
@Controller('contact')
export class ContactController implements CrudController<ContactEntity> {
  constructor(public service: ContactService) {}
}
