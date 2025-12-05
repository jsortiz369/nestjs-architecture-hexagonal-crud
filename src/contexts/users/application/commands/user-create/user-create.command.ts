import { UserPrimitive } from 'src/contexts/users/domain/user.interface';

type TypeCommand = Omit<UserPrimitive, '_id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

export class UserCreateCommand implements TypeCommand {
  /**
   * Creates an instance of UserCreateCommand.
   * @date 2025-12-05 17:32:27
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {TypeCommand['firstName']} firstName
   * @param {TypeCommand['secondName']} secondName
   * @param {TypeCommand['firstSurname']} firstSurname
   * @param {TypeCommand['secondSurname']} secondSurname
   * @param {TypeCommand['birthday']} birthday
   * @param {TypeCommand['phone']} phone
   * @param {TypeCommand['email']} email
   * @param {TypeCommand['password']} password
   * @param {TypeCommand['role']} role
   * @param {TypeCommand['status']} status
   */
  constructor(
    readonly firstName: TypeCommand['firstName'],
    readonly secondName: TypeCommand['secondName'],
    readonly firstSurname: TypeCommand['firstSurname'],
    readonly secondSurname: TypeCommand['secondSurname'],
    readonly birthday: TypeCommand['birthday'],
    readonly phone: TypeCommand['phone'],
    readonly email: TypeCommand['email'],
    readonly password: TypeCommand['password'],
    readonly role: TypeCommand['role'],
    readonly status: TypeCommand['status'],
  ) {}
}
