import { LoggerService, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/postgresql/prisma';

import { PrismaUtil } from '../utils';
import { EnvRepository } from 'src/shared/env/domain/env.repository';

export class PrismaPostgresqlPersistence extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly _logger: LoggerService;

  constructor(_logger: LoggerService, _envRepository: EnvRepository) {
    super({ datasourceUrl: _envRepository.getUrlDataSource() });
    this._logger = _logger;
  }

  get $utls() {
    return PrismaUtil;
  }

  /**
   * @description Connect to database postgresql
   * @date 2025-12-02 21:48:42
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @returns {Promise<void>}
   */
  async onModuleInit(): Promise<void> {
    try {
      await this.$connect();

      this._logger.log('Server prisma database connected POSTGRESQL', 'DatabaseApplication');
    } catch (error) {
      this._logger.error('Error connecting to server prisma database', 'DatabaseApplication');
      throw error;
    }
  }

  /**
   * @description Disconnect to database postgresql
   * @date 2025-12-02 21:48:29
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @returns {Promise<void>}
   */
  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
