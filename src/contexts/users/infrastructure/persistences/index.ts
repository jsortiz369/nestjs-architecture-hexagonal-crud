import { Provider } from '@nestjs/common';

import { PrismaMysqlPersistence, PrismaPostgresqlPersistence, PrismaSqlServerPersistence } from 'src/shared/database/infrastructure/persistences';
import { EnvRepository } from 'src/shared/env/domain/env.repository';
import { UserRepository } from '../../domain/repository/user.repository.js';

export const UserPersistenceProvider: Provider = {
  provide: UserRepository,
  useFactory: async (
    _envRepository: EnvRepository,
    mysql: PrismaMysqlPersistence,
    postgresql: PrismaPostgresqlPersistence,
    sqlserver: PrismaSqlServerPersistence,
  ): Promise<UserRepository> => {
    const typeDb = _envRepository.get('DB_TYPE');
    if (typeDb === 'mysql') return await import('./mysql/user.persistence.js').then((m) => new m.UserPersistence(mysql));
    if (typeDb === 'postgresql') throw new Error('Postgres not implemented for UserRepository');
    if (typeDb === 'sqlserver') throw new Error('sqlserver not implemented for UserRepository');
    throw new Error('No persistence defined for UserRepository');
  },
  inject: [EnvRepository, PrismaMysqlPersistence, PrismaPostgresqlPersistence, PrismaSqlServerPersistence],
};
