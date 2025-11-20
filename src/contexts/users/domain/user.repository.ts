import { DataFind } from 'src/shared/domain/interfaces';
import { User } from './user';
import { UserEmail, UserId } from './vo';
import { UserFind } from './user.interface';

export abstract class UserRepository {
  /**
   * @description Get all users
   * @date 2025-11-19 18:37:31
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @param {UserFind} filters
   * @returns {Promise<DataFind<User[]>>}
   */
  abstract find(filters: UserFind): Promise<DataFind<User>>;

  /**
   * @description Get User Find by Id
   * @date 2025-11-19 17:00:13
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @param {UserId} id
   * @returns {Promise<User | null>}
   */
  abstract findOneById(id: UserId): Promise<User | null>;

  /**
   * @description Get User Find by Email
   * @date 2025-11-19 17:00:13
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @param {UserEmail} email
   * @param {?UserId} [_id]
   * @returns {Promise<User | null>}
   */
  abstract findOneByEmail(email: UserEmail, _id?: UserId): Promise<User | null>;

  /**
   * @description Create user
   * @date 2025-11-19 16:10:46
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @param {User} user
   * @returns {Promise<User>}
   */
  abstract create(user: User): Promise<User>;

  /**
   * @description User update
   * @date 2025-11-19 17:39:46
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @param {User} user
   * @returns {Promise<User>}
   */
  abstract update(user: User): Promise<User>;

  /**
   * @description User delete by id
   * @date 2025-11-19 17:39:46
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @param {UserId} id
   * @returns {Promise<User>}
   */
  abstract delete(id: UserId): Promise<User>;
}
