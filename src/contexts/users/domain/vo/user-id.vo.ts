import { UuidValueObject } from 'src/shared/system/domain/vo';
import { UserPrimitive } from '../user.interface';

type UserIdProp = UserPrimitive['_id'];
export class UserId extends UuidValueObject {
  /**
   * Creates an instance of LanguageId.
   * @date 2025-11-19 10:47:02
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserIdProp} value
   */
  constructor(value: UserIdProp) {
    super(value, 'The id is not valid must be a uuid');
  }
}
