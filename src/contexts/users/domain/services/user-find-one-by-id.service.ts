import { UserNotFoundException } from '../exceptions';
import { User } from '../user';
import { UserRepository } from '../user.repository';
import { UserId } from '../vo';

export class UserFindOneByIdService {
  /**
   * Creates an instance of UserFindOneByIdService.
   * @date 2025-11-19 17:29:47
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserRepository} _userRepository
   */
  constructor(private readonly _userRepository: UserRepository) {}

  /**
   * @description Get User by Id
   * @date 2025-11-19 17:29:51
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @param {string} id
   * @returns {Promise<User>}
   */
  async run(id: string): Promise<User> {
    const _id = new UserId(id);
    const result = await this._userRepository.findOneById(_id);
    if (!result) throw new UserNotFoundException();
    return result;
  }
}
