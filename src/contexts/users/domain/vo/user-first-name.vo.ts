import { REGEX } from 'src/shared/system/domain/constants';
import { StringValueObject } from 'src/shared/system/domain/vo';
import { UserPrimitive } from '../user.interface';

type UserFirstNameProp = UserPrimitive['firstName'];
export class UserFirstName extends StringValueObject<UserFirstNameProp> {
  /**
   * Creates an instance of UserFirstName.
   * @date 2025-11-19 10:49:15
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserFirstNameProp} value
   */
  constructor(value: UserFirstNameProp) {
    super(value, 'The first name is not valid must be a string');

    this.ensureIsDefined('The first name is required'); // Not null or undefined
    this.ensureNotEmpty('The first name is not empty'); // Not empty string
    this.ensureIsFulfillRegExp(REGEX.LETTER_NUMBER_SPACE, 'The first name not valid must be letters, numbers and space'); // Only letters and numbers
    this.length(2, 25, 'The first name must be between 2 and 25 characters'); // Length between 2 and 25 characters
  }
}
