import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { ProfileEntity } from './../entities/profile.entity';
import { ProfileService } from './../services/profile.service';

@Crud({
  model: {
    type: ProfileEntity,
  },
  query: {
    join: {
      contact: {
        eager: true,
      },
    },
  },
})
@Controller('profile')
export class ProfileController implements CrudController<ProfileEntity> {
  constructor(public service: ProfileService) {}
}
