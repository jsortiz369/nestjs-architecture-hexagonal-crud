import { StringValueObject } from 'src/shared/domain/vo';

export class UserPhoto extends StringValueObject<string | null | undefined> {
  /**
   * Creates an instance of UserPhoto.
   * @date 2025-11-19 11:15:54
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {string} value
   */
  constructor(value: string) {
    super(value, 'The photo is not valid must be a string');

    this.ensureNotEmpty('The photo is not empty'); // Not empty string
    this.length(10, 255, 'The photo must be between 10 and 255 characters'); // Length between 10 and 255 characters
  }
}
