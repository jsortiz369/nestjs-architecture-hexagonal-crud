import { Logger, Module } from '@nestjs/common';

import { SharedModule } from 'src/shared/shared.module';
import { PrismaMysqlPersistence } from 'src/shared/infrastructure/persistences';
import { UuidRepository } from 'src/shared/domain/repositories';
import { UserRepository } from './domain/user.repository';
import { UserMysqlPersistence } from './infrastructure/persistences/user-mysql.persistence';
import * as useCases from './application';
import * as controllers from './infrastructure/http/controllers';
import * as services from './domain/services';

@Module({
  imports: [SharedModule],
  controllers: [
    controllers.UserCreateController,
    controllers.UserFindOneByIdController,
    controllers.UserDeleteController,
    controllers.UserUpdateController,
    controllers.UserFindController,
  ],
  providers: [
    Logger,
    {
      provide: UserRepository,
      useFactory: (persistence: PrismaMysqlPersistence) => new UserMysqlPersistence(persistence),
      inject: [PrismaMysqlPersistence],
    },
    {
      provide: services.UserExistByEmailService,
      useFactory: (userRepository: UserRepository) => new services.UserExistByEmailService(userRepository),
      inject: [UserRepository],
    },
    {
      provide: services.UserFindOneByIdService,
      useFactory: (userRepository: UserRepository) => new services.UserFindOneByIdService(userRepository),
      inject: [UserRepository],
    },
    {
      provide: useCases.UserCreateUserCase,
      useFactory: (uuidRepository: UuidRepository, existByEmailService: services.UserExistByEmailService, userRepository: UserRepository) =>
        new useCases.UserCreateUserCase(uuidRepository, existByEmailService, userRepository),
      inject: [UuidRepository, services.UserExistByEmailService, UserRepository],
    },
    {
      provide: useCases.UserFindOneByIdUseCase,
      useFactory: (userById: services.UserFindOneByIdService) => new useCases.UserFindOneByIdUseCase(userById),
      inject: [services.UserFindOneByIdService],
    },
    {
      provide: useCases.UserDeletedUseCase,
      useFactory: (userFindOneByIdService: services.UserFindOneByIdService, userRepository: UserRepository) =>
        new useCases.UserDeletedUseCase(userFindOneByIdService, userRepository),
      inject: [services.UserFindOneByIdService, UserRepository],
    },
    {
      provide: useCases.UserUpdateUseCase,
      useFactory: (
        userFindOneByIdService: services.UserFindOneByIdService,
        existByEmailService: services.UserExistByEmailService,
        userRepository: UserRepository,
      ) => new useCases.UserUpdateUseCase(userFindOneByIdService, existByEmailService, userRepository),
      inject: [services.UserFindOneByIdService, services.UserExistByEmailService, UserRepository],
    },
    {
      provide: useCases.UserFindUseCase,
      useFactory: (userRepository: UserRepository) => new useCases.UserFindUseCase(userRepository),
      inject: [UserRepository],
    },
  ],
})
export class UsersModule {}
