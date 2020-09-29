import { profile } from 'console';
import { type } from 'os';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ProfileEntity } from './profile.entity';

@Entity()
export class ContactEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 60,
    name: 'email',
  })
  email: string;

  @Column('varchar', {
    nullable: false,
    length: 10,
    name: 'phone',
  })
  phone: string;

  @Column('varchar', {
    nullable: false,
    length: 60,
    name: 'address',
  })
  address: string;

  @CreateDateColumn() created: Date;

  @UpdateDateColumn() updated: Date;

  @Column('varchar', {
    nullable: false,
    length: 60,
    name: 'contacto',
  })
  contacto: string;

  @ManyToOne(
    () => ProfileEntity,
    profile => profile.contact,
  )
  profile: ProfileEntity;
}
