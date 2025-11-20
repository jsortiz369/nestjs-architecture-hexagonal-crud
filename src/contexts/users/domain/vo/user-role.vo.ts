import { RoleType } from 'src/shared/domain/interfaces';
import { EnumValueObject } from 'src/shared/domain/vo';

export class UserRole extends EnumValueObject<typeof RoleType> {
  /**
   * Creates an instance of UserRole.
   * @date 2025-11-19 11:23:11
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {RoleType} value
   */
  constructor(value: RoleType) {
    super(value, RoleType, 'The role is not valid');
  }
}
