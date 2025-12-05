import { StringValueObject } from 'src/shared/system/domain/vo';
import { UserPrimitive } from '../user.interface';

type UserPhotoProp = UserPrimitive['photo'];
export class UserPhoto extends StringValueObject<UserPhotoProp> {
  /**
   * Creates an instance of UserPhoto.
   * @date 2025-11-19 11:15:54
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserPhotoProp} value
   */
  constructor(value: UserPhotoProp) {
    super(value, 'The photo is not valid must be a string');

    this.ensureNotEmpty('The photo is not empty'); // Not empty string
    this.length(10, 255, 'The photo must be between 10 and 255 characters'); // Length between 10 and 255 characters
  }
}
