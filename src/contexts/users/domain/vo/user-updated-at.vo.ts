import { DateValueObject } from 'src/shared/domain/vo';

export class UserUpdatedAt extends DateValueObject<Date> {
  /**
   * Creates an instance of UserUpdatedAt.
   * @date 2025-11-19 11:26:58
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {Date} value
   */
  constructor(value: Date) {
    super(value, 'The updated at is not valid must be a date');

    this.max(new Date(), 'The updated at cannot be in the future');
  }
}
