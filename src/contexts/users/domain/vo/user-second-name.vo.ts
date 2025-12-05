import { StringValueObject } from 'src/shared/system/domain/vo';
import { REGEX } from 'src/shared/system/domain/constants';
import { UserPrimitive } from '../user.interface';

type UserSecondNameProp = UserPrimitive['secondName'];
export class UserSecondName extends StringValueObject<UserSecondNameProp> {
  /**
   * Creates an instance of UserSecondName.
   * @date 2025-11-19 10:53:13
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserSecondNameProp} value
   */
  constructor(value: UserSecondNameProp) {
    super(value, 'The second name is not valid must be a string');

    this.ensureNotEmpty('The second name is not empty'); // Not empty string
    this.ensureIsFulfillRegExp(REGEX.LETTER_NUMBER_SPACE, 'The second name not valid must be letters, numbers and space'); // Only letters and numbers
    this.length(2, 25, 'The second name must be between 2 and 25 characters'); // Length between 2 and 25 characters
  }
}
