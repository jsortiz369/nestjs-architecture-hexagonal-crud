import { RoleType } from 'src/shared/system/domain/system.interface';
import { EnumValueObject } from 'src/shared/system/domain/vo';
import { UserPrimitive } from '../user.interface';

type UserRoleProp = UserPrimitive['role'];
export class UserRole extends EnumValueObject<typeof RoleType> {
  /**
   * Creates an instance of UserRole.
   * @date 2025-11-19 11:23:11
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserRoleProp} value
   */
  constructor(value: UserRoleProp) {
    super(value, RoleType, 'The role is not valid');
  }
}
