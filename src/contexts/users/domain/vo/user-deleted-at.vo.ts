import { DateValueObject } from 'src/shared/domain/vo';

export class UserDeletedAt extends DateValueObject<Date> {
  /**
   * Creates an instance of UserDeletedAt.
   * @date 2025-11-19 11:26:17
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {Date} value
   */
  constructor(value: Date) {
    super(value, 'The deleted at is not valid must be a date');

    this.max(new Date(), 'The deleted at cannot be in the future');
  }
}
