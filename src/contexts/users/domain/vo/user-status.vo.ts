import { StatusType } from 'src/shared/domain/interfaces';
import { EnumValueObject } from 'src/shared/domain/vo';

export class UserStatus extends EnumValueObject<typeof StatusType> {
  /**
   * Creates an instance of UserStatus.
   * @date 2025-11-19 11:23:16
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {StatusType} value
   */
  constructor(value: StatusType) {
    super(value, StatusType, 'The status is not valid');
  }
}
