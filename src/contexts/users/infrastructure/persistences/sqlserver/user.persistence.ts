import { UserRepository } from 'src/contexts/users/domain/repositories';
import { User } from 'src/contexts/users/domain/user';
import { UserEmail, UserId } from 'src/contexts/users/domain/vo';
import { PrismaSqlServerPersistence } from 'src/shared/database/infrastructure/persistences';
import { RoleType, StatusType } from 'src/shared/system/domain/system.interface';

export class UserPersistence implements UserRepository {
  /**
   * Creates an instance of UserPersistence.
   * @date 2025-12-13 15:58:39
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {PrismaSqlServerPersistence} _prisma
   */
  constructor(private readonly _prisma: PrismaSqlServerPersistence) {}

  /**
   * @description Get One User By Id
   * @date 2025-12-13 15:58:48
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @param {UserId} id
   * @returns {Promise<User | null>}
   */
  async findOneById(id: UserId): Promise<User | null> {
    const result = await this._prisma.user.findFirst({
      where: { id: id._value, deletedAt: null },
      omit: { deletedAt: true },
    });
    if (!result) return null;

    return User.fromPrimitives({
      _id: result.id,
      firstName: result.firstName,
      secondName: result.secondName,
      firstSurname: result.firstSurname,
      secondSurname: result.secondSurname,
      birthday: result.birthday,
      email: result.email,
      password: result.password,
      phone: result.phone,
      role: result.role == 1 ? RoleType.ADMIN : RoleType.USER,
      status: result.status == 1 ? StatusType.ACTIVE : StatusType.INACTIVE,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    });
  }

  /**
   * @description validate exist email
   * @date 2025-12-13 16:00:16
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @param {UserEmail} email
   * @param {?UserId} [_id]
   * @returns {Promise<boolean>}
   */
  async existByEmail(email: UserEmail, _id?: UserId): Promise<boolean> {
    const result = await this._prisma.user.findFirst({
      where: { email: email._value, id: { not: _id?._value }, deletedAt: null },
      select: { id: true },
    });
    return result !== null;
  }

  /**
   * @description Create user
   * @date 2025-12-13 16:00:34
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @param {User} data
   * @returns {Promise<User>}
   */
  async create(data: User): Promise<User> {
    await this._prisma.user.create({
      data: {
        id: data._id._value,
        firstName: data.firstName._value,
        secondName: data.secondName?._value,
        firstSurname: data.firstSurname._value,
        secondSurname: data.secondSurname?._value,
        birthday: data.birthday._value,
        phone: data.phone?._value,
        email: data.email._value,
        password: data.password._value,
        role: data.role?._value == RoleType.ADMIN ? 1 : 0,
        status: data.status?._value == StatusType.ACTIVE ? 1 : 0,
        createdAt: data.createdAt._value,
        updatedAt: data.updatedAt._value,
      },
    });
    return data;
  }

  /**
   * @description Update user by Id
   * @date 2025-12-13 16:01:50
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @param {UserId} id
   * @param {User} data
   * @returns {Promise<User>}
   */
  async update(id: UserId, data: User): Promise<User> {
    await this._prisma.user.update({
      data: {
        id: data._id._value,
        firstName: data.firstName._value,
        secondName: data.secondName?._value,
        firstSurname: data.firstSurname._value,
        secondSurname: data.secondSurname?._value,
        birthday: data.birthday._value,
        phone: data.phone?._value,
        email: data.email._value,
        password: data.password._value,
        role: data.role?._value == RoleType.ADMIN ? 1 : 0,
        status: data.status?._value == StatusType.ACTIVE ? 1 : 0,
        createdAt: data.createdAt._value,
        updatedAt: data.updatedAt._value,
      },
      where: { id: id._value },
    });

    return data;
  }

  /**
   * @description Delete User By Id
   * @date 2025-12-13 16:02:22
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @param {UserId} id
   * @returns {Promise<User>}
   */
  async delete(id: UserId): Promise<User> {
    const deleted = new Date();

    const result = await this._prisma.user.update({
      data: {
        status: 0,
        updatedAt: deleted,
        deletedAt: deleted,
      },
      where: { id: id._value },
      omit: { deletedAt: true },
    });

    return User.fromPrimitives({
      _id: result.id,
      firstName: result.firstName,
      secondName: result.secondName,
      firstSurname: result.firstSurname,
      secondSurname: result.secondSurname,
      birthday: result.birthday,
      email: result.email,
      password: result.password,
      phone: result.phone,
      role: result.role == 1 ? RoleType.ADMIN : RoleType.USER,
      status: result.status == 1 ? StatusType.ACTIVE : StatusType.INACTIVE,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    });
  }
}
