import { LoggerService, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from 'generated/mysql/prisma';
import { EnvRepository } from 'src/shared/domain/repositories';

export class PrismaMysqlPersistence extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(
    private readonly _logger: LoggerService,
    private readonly _envRepository: EnvRepository,
  ) {
    super({ datasourceUrl: _envRepository.getUrlDataSource() });
  }

  async onModuleInit() {
    if (this._envRepository.get('DB_TYPE') !== 'mysql') return;

    try {
      await this.$connect();

      this._logger.log('Server prisma database connected');
    } catch (error) {
      this._logger.error('Error connecting to server prisma database');
      throw error;
    }
  }

  async onModuleDestroy() {
    if (this._envRepository.get('DB_TYPE') !== 'mysql') return;

    await this.$disconnect();
  }
}
