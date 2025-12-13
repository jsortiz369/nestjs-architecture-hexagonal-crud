import { Module } from '@nestjs/common';
import { BcryptRepository } from './domain/bcrypt.repository';
import { BcryptPersistence } from './infrastructure/persistences';

@Module({
  providers: [
    {
      provide: BcryptRepository,
      useClass: BcryptPersistence,
    },
  ],
  exports: [BcryptRepository],
})
export class BcryptModule {}
