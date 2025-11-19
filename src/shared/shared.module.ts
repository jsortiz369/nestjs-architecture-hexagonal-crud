import { Logger, Module } from '@nestjs/common';

import * as repositories from './domain/repositories';
import * as persistences from './infrastructure/persistences';

@Module({
  imports: [],
  providers: [
    Logger,
    {
      provide: repositories.EnvRepository,
      useClass: persistences.EnvPersistence,
    },
  ],
  exports: [repositories.EnvRepository],
})
export class SharedModule {}
