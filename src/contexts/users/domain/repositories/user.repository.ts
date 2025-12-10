import { User } from '../user';
import { UserEmail, UserId } from '../vo';

export abstract class UserRepository {
  /**
   * @description Get One User By Id
   * @date 2025-12-10 06:45:30
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @param {UserId} id
   * @returns {Promise<User | null>}
   */
  abstract findOneById(id: UserId): Promise<User | null>;

  /**
   * @description validate exist email
   * @date 2025-12-10 06:45:34
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @param {UserEmail} email
   * @param {?UserId} [id]
   * @returns {Promise<boolean>}
   */
  abstract existByEmail(email: UserEmail, id?: UserId): Promise<boolean>;

  /**
   * @description Create user
   * @date 2025-12-10 06:45:24
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @param {User} data
   * @returns {Promise<User>}
   */
  abstract create(data: User): Promise<User>;

  /**
   * @description Update user by Id
   * @date 2025-12-10 06:45:38
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @param {UserId} id
   * @param {*} data
   * @returns {Promise<User>}
   */
  abstract update(id: UserId, data: any): Promise<User>;

  /**
   * @description Delete User By Id
   * @date 2025-12-10 06:45:42
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @param {UserId} id
   * @returns {Promise<User>}
   */
  abstract delete(id: UserId): Promise<User>;
}
