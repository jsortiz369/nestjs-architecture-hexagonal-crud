import { UserExistByEmailException } from '../exceptions';
import { UserRepository } from '../user.repository';
import { UserEmail, UserId } from '../vo';

export class UserExistByEmailService {
  /**
   * Creates an instance of UserExistByEmailService.
   * @date 2025-11-19 17:17:55
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserRepository} _userRepository
   */
  constructor(private readonly _userRepository: UserRepository) {}

  /**
   * @description Validate exist user by email
   * @date 2025-11-19 17:17:40
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @param {string} value
   * @param {?string} [id]
   * @returns {Promise<boolean>}
   */
  async run(value: string, id?: string): Promise<boolean> {
    const _id = id ? new UserId(id) : undefined;
    const email = new UserEmail(value);
    const result = await this._userRepository.findOneByEmail(email, _id);
    if (result) throw new UserExistByEmailException();
    return false;
  }
}
