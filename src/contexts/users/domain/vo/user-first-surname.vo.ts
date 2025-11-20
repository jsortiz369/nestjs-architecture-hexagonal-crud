import { StringValueObject } from 'src/shared/domain/vo';
import { REGEX } from 'src/shared/infrastructure/constants/regex.constant';

export class UserFirstSurname extends StringValueObject<string> {
  /**
   * Creates an instance of UserFirstSurname.
   * @date 2025-11-19 10:54:59
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {string} value
   */
  constructor(value: string) {
    super(value, 'The first surname is not valid must be a string');

    this.ensureIsDefined('The first surname is required'); // Not null or undefined
    this.ensureNotEmpty('The first surname is not empty'); // Not empty string
    this.ensureIsFulfillRegExp(REGEX.LETTER_NUMBER_SPACE, 'The first surname not valid must be letters, numbers and space'); // Only letters and numbers
    this.length(2, 25, 'The first surname must be between 2 and 25 characters'); // Length between 2 and 25 characters
  }
}
