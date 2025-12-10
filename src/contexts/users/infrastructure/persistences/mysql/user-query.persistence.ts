import { $Enums } from 'generated/mysql/prisma';
import { UserFindAllQuery } from 'src/contexts/users/application';
import { UserExistProjection, UserFindOneByIdProjection } from 'src/contexts/users/domain/projections';
import { UserQueryRepository } from 'src/contexts/users/domain/repositories';
import { PrismaMysqlPersistence } from 'src/shared/database/infrastructure/persistences';
import { DataFindAll, RoleType, StatusType } from 'src/shared/system/domain/system.interface';

export class UserQueryPersistence implements UserQueryRepository {
  /**
   * Creates an instance of UserQueryPersistence.
   * @date 2025-12-10 06:44:54
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {PrismaMysqlPersistence} _prisma
   */
  constructor(private readonly _prisma: PrismaMysqlPersistence) {}

  /**
   * @description Get all user by filters
   * @date 2025-12-10 07:57:39
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @param {UserFindAllQuery} query
   * @returns {Promise<DataFindAll<UserFindOneByIdProjection[]>>}
   */
  async findAll(query: UserFindAllQuery): Promise<DataFindAll<UserFindOneByIdProjection[]>> {
    console.log(query);

    return {
      data: [],
      meta: {
        page: 0,
        total: 0,
        filter: 0,
        lastPage: 0,
      },
    };
  }

  /**
   * @description Get User By Id
   * @date 2025-12-10 06:44:34
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @param {string} id
   * @returns {Promise<UserFindOneByIdProjection | null>}
   */
  async findOneById(id: string): Promise<UserFindOneByIdProjection | null> {
    const result = await this._prisma.user.findFirst({
      where: { id, deletedAt: null },
      omit: { password: true, deletedAt: true },
    });

    if (!result) return null;

    const role = result.role == $Enums.Role.ADMIN ? RoleType.ADMIN : RoleType.USER;
    const status = result.status == $Enums.Status.ACTIVE ? StatusType.ACTIVE : StatusType.INACTIVE;

    return new UserFindOneByIdProjection(
      result.id,
      result.firstName,
      result.secondName,
      result.firstSurname,
      result.secondSurname,
      result.birthday,
      result.phone,
      result.email,
      result.photo,
      status,
      role,
      result.createdAt,
      result.updatedAt,
    );
  }

  /**
   * @description Validate exist email
   * @date 2025-12-10 07:12:09
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @param {string} email
   * @param {?string} [id]
   * @returns {Promise<boolean>}
   */
  async existByEmail(email: string, id?: string): Promise<UserExistProjection> {
    const result = await this._prisma.user.findFirst({
      where: { email, id: { not: id }, deletedAt: null },
      select: { id: true },
    });

    return new UserExistProjection(result !== null);
  }
}
