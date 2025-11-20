import { StringValueObject } from 'src/shared/domain/vo';

export class UserPassword extends StringValueObject<string> {
  /**
   * Creates an instance of UserPassword.
   * @date 2025-11-19 11:18:37
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {string} value
   */
  constructor(value: string) {
    super(value, 'The password is not valid must be a string');

    this.ensureIsDefined('The password is required'); // Not null or undefined
    this.ensureNotEmpty('The password is not empty'); // Not empty string
    this.length(8, 255, 'The password must be between 8 and 255 characters'); // Length between 8 and 255 characters
  }
}
