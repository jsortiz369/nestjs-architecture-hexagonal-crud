import { StringValueObject } from 'src/shared/domain/vo';
import { REGEX } from 'src/shared/infrastructure/constants/regex.constant';

export class UserPhone extends StringValueObject<string | null | undefined> {
  /**
   * Creates an instance of UserPhone.
   * @date 2025-11-19 11:10:01
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {string} value
   */
  constructor(value: string) {
    super(value, 'The phone is not valid must be a string');

    this.ensureNotEmpty('The phone is not empty'); // Not empty string
    this.ensureIsFulfillRegExp(REGEX.PHONE, 'The phone not valid must be a phone'); // Only letters and numbers
  }
}
