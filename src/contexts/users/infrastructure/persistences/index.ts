import { Provider } from '@nestjs/common';

import { PrismaMysqlPersistence, PrismaPostgresqlPersistence, PrismaSqlServerPersistence } from 'src/shared/database/infrastructure/persistences';
import { EnvRepository } from 'src/shared/env/domain/env.repository';
import { UserQueryRepository } from '../../domain/repositories/user-query.repository';
import { UserRepository } from '../../domain/repositories';

export const UserPersistenceProvider: Provider = {
  provide: UserRepository,
  useFactory: (
    _envRepository: EnvRepository,
    mysql: PrismaMysqlPersistence,
    postgresql: PrismaPostgresqlPersistence,
    sqlserver: PrismaSqlServerPersistence,
  ): Promise<UserRepository> => {
    const typeDb = _envRepository.get('DB_TYPE');
    if (typeDb === 'mysql') return import('./mysql/user.persistence.js').then((m) => new m.UserPersistence(mysql));
    if (typeDb === 'postgresql') return import('./postgresql/user.persistence.js').then((m) => new m.UserPersistence(postgresql));
    if (typeDb === 'sqlserver') return import('./sqlserver/user.persistence.js').then((m) => new m.UserPersistence(sqlserver));
    throw new Error('No persistence defined for UserRepository');
  },
  inject: [EnvRepository, PrismaMysqlPersistence, PrismaPostgresqlPersistence, PrismaSqlServerPersistence],
};

export const UserQueryPersistenceProvider: Provider = {
  provide: UserQueryRepository,
  useFactory: (
    _envRepository: EnvRepository,
    mysql: PrismaMysqlPersistence,
    postgresql: PrismaPostgresqlPersistence,
    sqlserver: PrismaSqlServerPersistence,
  ): Promise<UserQueryRepository> => {
    const typeDb = _envRepository.get('DB_TYPE');
    if (typeDb === 'mysql') return import('./mysql/user-query.persistence.js').then((m) => new m.UserQueryPersistence(mysql));
    if (typeDb === 'postgresql') return import('./postgresql/user-query.persistence.js').then((m) => new m.UserQueryPersistence(postgresql));
    if (typeDb === 'sqlserver') return import('./sqlserver/user-query.persistence.js').then((m) => new m.UserQueryPersistence(sqlserver));
    throw new Error('No persistence defined for UserRepository');
  },
  inject: [EnvRepository, PrismaMysqlPersistence, PrismaPostgresqlPersistence, PrismaSqlServerPersistence],
};
