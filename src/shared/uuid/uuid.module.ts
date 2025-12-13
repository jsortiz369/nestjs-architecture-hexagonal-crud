import { Module } from '@nestjs/common';

import { UuidRepository } from './domain/uuid.repository';
import { UuidV4Persistence } from './infrastructure/persistences';

@Module({
  providers: [
    {
      provide: UuidRepository,
      useClass: UuidV4Persistence,
    },
  ],
  exports: [UuidRepository],
})
export class UuidModule {}
