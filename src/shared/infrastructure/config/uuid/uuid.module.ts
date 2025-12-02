import { Module } from '@nestjs/common';
import { UuidPersistence } from './v4/persistences';
import { UuidRepository } from './v4/repository';

@Module({
  providers: [
    {
      provide: UuidRepository,
      useClass: UuidPersistence,
    },
  ],
  exports: [UuidRepository],
})
export class UUIDModule {}
