import { DateValueObject } from 'src/shared/system/domain/vo';
import { UserPrimitive } from '../user.interface';

type UserUpdatedAtProp = UserPrimitive['updatedAt'];
export class UserUpdatedAt extends DateValueObject<UserUpdatedAtProp> {
  /**
   * Creates an instance of UserUpdatedAt.
   * @date 2025-11-19 11:26:58
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserUpdatedAtProp} value
   */
  constructor(value: UserUpdatedAtProp) {
    super(value, 'The updated at is not valid must be a date');

    this.max(new Date(), 'The updated at cannot be in the future');
  }
}
