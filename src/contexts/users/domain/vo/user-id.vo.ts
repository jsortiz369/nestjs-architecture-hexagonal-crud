import { UuidValueObject } from 'src/shared/domain/vo';

export class UserId extends UuidValueObject {
  /**
   * Creates an instance of LanguageId.
   * @date 2025-11-19 10:47:02
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {string} value
   */
  constructor(value: string) {
    super(value, 'The id is not valid must be a uuid');
  }
}
