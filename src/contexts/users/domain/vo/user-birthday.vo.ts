import { DateValueObject } from 'src/shared/system/domain/vo';
import { UserPrimitive } from '../user.interface';

type UserBirthdayProp = UserPrimitive['birthday'];
export class UserBirthday extends DateValueObject<UserBirthdayProp> {
  /**
   * Creates an instance of UserBirthday.
   * @date 2025-11-19 10:58:39
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserBirthdayProp} _value
   */
  constructor(readonly _value: UserBirthdayProp) {
    super(_value, 'The birthday is not valid must be a date');

    this.ensureIsDefined('The birthday is required');
    this.max(new Date(), 'The birthday cannot be in the future');
    this.min(new Date('1900-01-01'), 'The birthday cannot be before 1900');
  }
}
