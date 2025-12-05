import { REGEX } from 'src/shared/system/domain/constants';
import { StringValueObject } from 'src/shared/system/domain/vo';
import { UserPrimitive } from '../user.interface';

type UserFirstSurnameProp = UserPrimitive['firstSurname'];
export class UserFirstSurname extends StringValueObject<UserFirstSurnameProp> {
  /**
   * Creates an instance of UserFirstSurname.
   * @date 2025-11-19 10:54:59
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserFirstSurnameProp} value
   */
  constructor(value: UserFirstSurnameProp) {
    super(value, 'The first surname is not valid must be a string');

    this.ensureIsDefined('The first surname is required'); // Not null or undefined
    this.ensureNotEmpty('The first surname is not empty'); // Not empty string
    this.ensureIsFulfillRegExp(REGEX.LETTER_NUMBER_SPACE, 'The first surname not valid must be letters, numbers and space'); // Only letters and numbers
    this.length(2, 25, 'The first surname must be between 2 and 25 characters'); // Length between 2 and 25 characters
  }
}
