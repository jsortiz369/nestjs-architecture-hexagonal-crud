import { UserFindAllQuery } from 'src/contexts/users/application';
import { UserExistProjection, UserFindAllProjection, UserFindOneByIdProjection } from 'src/contexts/users/domain/projections';
import { UserQueryRepository } from 'src/contexts/users/domain/repositories';
import { FiledSearchType } from 'src/shared/database/domain/database.interface';
import { PrismaSqlServerPersistence } from 'src/shared/database/infrastructure/persistences';
import { DataFindAll, RoleType, StatusType } from 'src/shared/system/domain/system.interface';

export class UserQueryPersistence implements UserQueryRepository {
  /**
   * Creates an instance of UserQueryPersistence.
   * @date 2025-12-13 15:49:17
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {PrismaSqlServerPersistence} _prisma
   */
  constructor(private readonly _prisma: PrismaSqlServerPersistence) {}

  /**
   * @description Get all user by filters
   * @date 2025-12-13 15:49:27
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @param {UserFindAllQuery} query
   * @returns {Promise<DataFindAll<UserFindAllProjection>>}
   */
  async findAll(query: UserFindAllQuery): Promise<DataFindAll<UserFindAllProjection>> {
    const { page, limit, sortOrder, sort, filters, search } = query;

    const where: any = { deletedAt: null };

    // TODO: Total users
    const total = await this._prisma.user.count({ where: { ...where } });

    // TODO: Field filter
    const filterCampos: FiledSearchType[] = [
      { field: 'firstName', type: 'string' },
      { field: 'secondName', type: 'string' },
      { field: 'firstSurname', type: 'string' },
      { field: 'secondSurname', type: 'string' },
      { field: 'birthday', type: 'Date' },
      { field: 'phone', type: 'string' },
      { field: 'email', type: 'string' },
      { field: 'status', type: 'number', callback: (value: string) => this.validateStatus(value) },
      { field: 'role', type: 'number', callback: (value: string) => this.validateRole(value) },
      { field: 'createdAt', type: 'Date' },
      { field: 'updatedAt', type: 'Date' },
    ];

    // TODO: validate Filters
    if (search !== undefined) {
      where.OR = filterCampos.map((_) => this._prisma.$utls.searchFilter(_, search)).filter((_) => _ !== null && _ !== undefined);
    } else if (filters !== undefined) {
      filterCampos.forEach((_) => {
        const field = filters[_.field as 'email' | 'status' | 'role'];
        if (field === undefined) return;
        if (field.value === null || field.value === undefined) return;

        const filter = this._prisma.$utls.searchFilterField(_, field);
        if (filter == null) return;
        where.AND ??= [];
        where.AND.push(filter);
      });
    }

    // TODO: Total filter
    const totalFilters = await this._prisma.user.count({ where: { ...where } });

    // TODO: Get Users
    const result = await this._prisma.user.findMany({
      where,
      omit: { password: true, deletedAt: true },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { [sort]: sortOrder },
    });

    return {
      data: result.map((_) => {
        return new UserFindAllProjection(
          _.id,
          _.firstName,
          _.secondName ?? undefined,
          _.firstSurname,
          _.secondSurname ?? undefined,
          _.birthday,
          _.phone ?? undefined,
          _.email,
          _.status == 1 ? StatusType.ACTIVE : StatusType.INACTIVE,
          _.role == 1 ? RoleType.ADMIN : RoleType.USER,
          _.createdAt,
          _.updatedAt,
        );
      }),
      meta: {
        total: total,
        filter: totalFilters != total ? totalFilters : undefined,
        page,
        lastPage: Math.ceil(total / limit),
      },
    };
  }

  /**
   * @description Get User By Id
   * @date 2025-12-13 15:57:08
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

    return new UserFindOneByIdProjection(
      result.id,
      result.firstName,
      result.secondName,
      result.firstSurname,
      result.secondSurname,
      result.birthday,
      result.phone,
      result.email,
      result.status == 1 ? StatusType.ACTIVE : StatusType.INACTIVE,
      result.role == 1 ? RoleType.ADMIN : RoleType.USER,
      result.createdAt,
      result.updatedAt,
    );
  }

  /**
   * @description Validate exist email
   * @date 2025-12-13 15:57:59
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @param {string} email
   * @param {?string} [id]
   * @returns {Promise<UserExistProjection>}
   */
  async existByEmail(email: string, id?: string): Promise<UserExistProjection> {
    const result = await this._prisma.user.findFirst({
      where: { email, id: { not: id }, deletedAt: null },
      select: { id: true },
    });

    return new UserExistProjection(result !== null);
  }

  private validateStatus(status: string): string | undefined | null {
    status = status?.toLowerCase();
    return status === 'activo' ? '1' : status === 'inactivo' ? '0' : null;
  }

  private validateRole(role: string): string | undefined | null {
    role = role?.toLowerCase();
    return role === 'admin' ? '1' : role === 'usuario' ? '0' : null;
  }
}
