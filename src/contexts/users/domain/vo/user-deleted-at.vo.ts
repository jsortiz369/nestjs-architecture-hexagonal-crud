import { DateValueObject } from 'src/shared/system/domain/vo';
import { UserPrimitive } from '../user.interface';

type UserDeletedAtProp = UserPrimitive['deletedAt'];
export class UserDeletedAt extends DateValueObject<UserDeletedAtProp> {
  /**
   * Creates an instance of UserDeletedAt.
   * @date 2025-11-19 11:26:17
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserDeletedAtProp} value
   */
  constructor(value: UserDeletedAtProp) {
    super(value, 'The deleted at is not valid must be a date');

    this.max(new Date(), 'The deleted at cannot be in the future');
  }
}
