import { DateValueObject } from 'src/shared/domain/vo';

export class UserCreatedAt extends DateValueObject<Date> {
  /**
   * Creates an instance of UserCreatedAt.
   * @date 2025-11-19 11:25:12
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {Date} value
   */
  constructor(value: Date) {
    super(value, 'The created at is not valid must be a date');

    this.ensureIsDefined('the created at is required');
    this.max(new Date(), 'The created at cannot be in the future');
  }
}
