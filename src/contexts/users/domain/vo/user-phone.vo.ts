import { REGEX } from 'src/shared/system/domain/constants';
import { StringValueObject } from 'src/shared/system/domain/vo';
import { UserPrimitive } from '../user.interface';

type UserPhoneProp = UserPrimitive['phone'];
export class UserPhone extends StringValueObject<UserPhoneProp> {
  /**
   * Creates an instance of UserPhone.
   * @date 2025-11-19 11:10:01
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserPhoneProp} value
   */
  constructor(value: UserPhoneProp) {
    super(value, 'The phone is not valid must be a string');

    this.ensureNotEmpty('The phone is not empty'); // Not empty string
    this.ensureIsFulfillRegExp(REGEX.PHONE, 'The phone not valid must be a phone'); // Only letters and numbers
  }
}
