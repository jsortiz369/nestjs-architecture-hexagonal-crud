import { Module } from '@nestjs/common';

import { EnvModule } from 'src/shared/env/env.module';
import { DatabaseModule } from 'src/shared/database/database.module';
import { UuidModule } from 'src/shared/uuid/uuid.module';
import { BcryptModule } from 'src/shared/bcrypt/bcrypt.module';
import { UuidRepository } from 'src/shared/uuid/domain/uuid.repository';
import { BcryptRepository } from 'src/shared/bcrypt/domain/bcrypt.repository';
import { UserQueryRepository, UserRepository } from './domain/repositories';
import { UserPersistenceProvider, UserQueryPersistenceProvider } from './infrastructure/persistences';

import * as controllers from './infrastructure/controllers';
import * as handlers from './application';
import * as services from './domain/service';

@Module({
  imports: [EnvModule, DatabaseModule, UuidModule, BcryptModule],
  controllers: [
    controllers.UserCreateController,
    controllers.UserUpdateController,
    controllers.UserDeleteController,
    controllers.UserFindAllController,
    controllers.UserFindOneByIdController,
    controllers.UserExistByEmailController,
  ],
  providers: [
    UserPersistenceProvider,
    UserQueryPersistenceProvider,
    {
      provide: services.UserFindOneByIdService,
      useFactory: (userRepository: UserRepository) => new services.UserFindOneByIdService(userRepository),
      inject: [UserRepository],
    },
    {
      provide: services.UserQueryFindOneByIdService,
      useFactory: (userQueryRepository: UserQueryRepository) => new services.UserQueryFindOneByIdService(userQueryRepository),
      inject: [UserQueryRepository],
    },
    {
      provide: handlers.UserFindAllHandler,
      useFactory: (_userQueryRepository: UserQueryRepository) => new handlers.UserFindAllHandler(_userQueryRepository),
      inject: [UserQueryRepository],
    },
    {
      provide: handlers.UserFindOneByIdHandler,
      useFactory: (_userQueryFindOneByIdService: services.UserQueryFindOneByIdService) =>
        new handlers.UserFindOneByIdHandler(_userQueryFindOneByIdService),
      inject: [services.UserQueryFindOneByIdService],
    },
    {
      provide: handlers.UserExistByEmailHandler,
      useFactory: (_userQueryRepository: UserQueryRepository) => new handlers.UserExistByEmailHandler(_userQueryRepository),
      inject: [UserRepository],
    },
    {
      provide: handlers.UserCreateHandler,
      useFactory: (_uuidRepository: UuidRepository, _bcryptRepository: BcryptRepository, _userRepository: UserRepository) => {
        return new handlers.UserCreateHandler(_uuidRepository, _bcryptRepository, _userRepository);
      },
      inject: [UuidRepository, BcryptRepository, UserRepository],
    },
    {
      provide: handlers.UserUpdateHandler,
      useFactory: (_userRepository: UserRepository, _userFindOneByIdService: services.UserFindOneByIdService) => {
        return new handlers.UserUpdateHandler(_userRepository, _userFindOneByIdService);
      },
      inject: [UserRepository, services.UserFindOneByIdService],
    },
    {
      provide: handlers.UserDeleteHandler,
      useFactory: (_userFindOneByIdService: services.UserFindOneByIdService, _userRepository: UserRepository) => {
        return new handlers.UserDeleteHandler(_userFindOneByIdService, _userRepository);
      },
      inject: [services.UserFindOneByIdService, UserRepository],
    },
  ],
})
export class UsersModule {}
