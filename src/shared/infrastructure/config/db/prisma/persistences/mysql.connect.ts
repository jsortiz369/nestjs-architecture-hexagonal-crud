import { LoggerService, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/mysql/prisma';
import { PrismaUtil } from '../utils';
import { EnvRepository } from '../../../env/zod/repository';

export class MysqlConnect extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  /**
   * Creates an instance of MysqlConnect.
   * @date 2025-12-02 06:45:11
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {LoggerService} _logger
   * @param {EnvRepository} _envRepository
   */
  constructor(
    private readonly _logger: LoggerService,
    private readonly _envRepository: EnvRepository,
  ) {
    super({ datasourceUrl: _envRepository.getUrlDataSource() });
  }

  /**
   * @description Connect to database mysql
   * @date 2025-12-02 06:46:02
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @returns {Promise<void>}
   */
  async onModuleInit(): Promise<void> {
    try {
      await this.$connect();

      this._logger.log('Server prisma database connected', 'DatabaseApplication');
    } catch (error) {
      this._logger.error('Error connecting to server prisma database', 'DatabaseApplication');
      throw error;
    }
  }

  /**
   * @description Disconnect to database mysql
   * @date 2025-12-02 06:46:15
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @returns {Promise<void>}
   */
  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }

  get $utls() {
    return PrismaUtil;
  }
}
