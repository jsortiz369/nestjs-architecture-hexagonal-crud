import { StatusType } from 'src/shared/system/domain/system.interface';
import { EnumValueObject } from 'src/shared/system/domain/vo';
import { UserPrimitive } from '../user.interface';

type UserStatusProp = UserPrimitive['status'];
export class UserStatus extends EnumValueObject<typeof StatusType> {
  /**
   * Creates an instance of UserStatus.
   * @date 2025-11-19 11:23:16
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserStatusProp} value
   */
  constructor(value: UserStatusProp) {
    super(value, StatusType, 'The status is not valid');
  }
}
