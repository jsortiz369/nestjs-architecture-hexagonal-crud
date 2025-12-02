import { Module } from '@nestjs/common';

import { EnvRepository } from 'src/shared/domain/repositories';
import { EnvPersistence } from './zod/persistences';

@Module({
  providers: [
    {
      provide: EnvRepository,
      useClass: EnvPersistence,
    },
  ],
  exports: [EnvRepository],
})
export class EnvModule {}
