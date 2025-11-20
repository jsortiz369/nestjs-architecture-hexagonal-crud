import { StringValueObject } from 'src/shared/domain/vo';
import { REGEX } from 'src/shared/infrastructure/constants/regex.constant';

export class UserSecondName extends StringValueObject<string | null | undefined> {
  /**
   * Creates an instance of UserSecondName.
   * @date 2025-11-19 10:53:13
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {string} value
   */
  constructor(value: string) {
    super(value, 'The second name is not valid must be a string');

    this.ensureNotEmpty('The second name is not empty'); // Not empty string
    this.ensureIsFulfillRegExp(REGEX.LETTER_NUMBER_SPACE, 'The second name not valid must be letters, numbers and space'); // Only letters and numbers
    this.length(2, 25, 'The second name must be between 2 and 25 characters'); // Length between 2 and 25 characters
  }
}
