import { $Enums } from 'generated/mysql/prisma';
import { UserRepository } from 'src/contexts/users/domain/repository';
import { User } from 'src/contexts/users/domain/user';
import { UserEmail, UserId } from 'src/contexts/users/domain/vo';
import { PrismaMysqlPersistence } from 'src/shared/database/infrastructure/persistences';
import { RoleType, StatusType } from 'src/shared/system/domain/system.interface';

export class UserPersistence implements UserRepository {
  constructor(private readonly _prisma: PrismaMysqlPersistence) {}

  async findOneById(id: UserId): Promise<User | null> {
    await Promise.resolve(id);
    throw new Error('Method not implemented.');
  }

  /**
   * @description validate exist email
   * @date 2025-12-05 17:23:31
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @param {UserEmail} email
   * @returns {Promise<boolean>}
   */
  async existByEmail(email: UserEmail): Promise<boolean> {
    const result = await this._prisma.user.findFirst({
      where: { email: email._value },
      select: { id: true },
    });
    return result !== null;
  }

  /**
   * @description Create user
   * @date 2025-12-05 17:23:17
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @param {User} data
   * @returns {Promise<User>}
   */
  async create(data: User): Promise<User> {
    const roleUser = data.role?._value == RoleType.ADMIN ? $Enums.Role.ADMIN : $Enums.Role.USER;
    const statusUser = data.status?._value == StatusType.ACTIVE ? $Enums.Status.ACTIVE : $Enums.Status.INACTIVE;

    await this._prisma.user.create({
      data: {
        id: data.id._value,
        firstName: data.firstName._value,
        secondName: data.secondName?._value,
        firstSurname: data.firstSurname._value,
        secondSurname: data.secondSurname?._value,
        birthday: data.birthday._value,
        phone: data.phone?._value,
        email: data.email._value,
        password: data.password._value,
        role: roleUser,
        status: statusUser,
        createdAt: data.createdAt._value,
        updatedAt: data.updatedAt._value,
      },
    });
    return data;
  }

  async update(id: UserId, data: any): Promise<User> {
    await Promise.resolve({ id, data });
    throw new Error('Method not implemented.');
  }

  async delete(id: UserId): Promise<User> {
    await Promise.resolve(id);
    throw new Error('Method not implemented.');
  }
}
