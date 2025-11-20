import { StringValueObject } from 'src/shared/domain/vo';
import { REGEX } from 'src/shared/infrastructure/constants/regex.constant';

export class UserFirstName extends StringValueObject<string> {
  /**
   * Creates an instance of UserFirstName.
   * @date 2025-11-19 10:49:15
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {string} value
   */
  constructor(value: string) {
    super(value, 'The first name is not valid must be a string');

    this.ensureIsDefined('The first name is required'); // Not null or undefined
    this.ensureNotEmpty('The first name is not empty'); // Not empty string
    this.ensureIsFulfillRegExp(REGEX.LETTER_NUMBER_SPACE, 'The first name not valid must be letters, numbers and space'); // Only letters and numbers
    this.length(2, 25, 'The first name must be between 2 and 25 characters'); // Length between 2 and 25 characters
  }
}
