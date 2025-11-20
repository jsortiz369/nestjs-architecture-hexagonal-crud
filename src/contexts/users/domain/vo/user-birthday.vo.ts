import { DateValueObject } from 'src/shared/domain/vo/date.vo';

export class UserBirthday extends DateValueObject<Date> {
  /**
   * Creates an instance of UserBirthday.
   * @date 2025-11-19 10:58:39
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {Date} _value
   */
  constructor(readonly _value: Date) {
    super(_value, 'The birthday is not valid must be a date');

    this.ensureIsDefined('The birthday is required');
    this.max(new Date(), 'The birthday cannot be in the future');
    this.min(new Date('1900-01-01'), 'The birthday cannot be before 1900');
  }
}
