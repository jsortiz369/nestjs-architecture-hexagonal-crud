import { UserQueryRepository } from 'src/contexts/users/domain/repositories';
import { UserExistByEmailQuery } from './user-exist-by-email.query';
import { UserExistProjection } from 'src/contexts/users/domain/projections';

export class UserExistByEmailHandler {
  /**
   * Creates an instance of UserExistByEmailHandler.
   * @date 2025-12-10 07:01:17
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserQueryRepository} _userQueryRepository
   */
  constructor(private readonly _userQueryRepository: UserQueryRepository) {}

  async execute(queryEmail: UserExistByEmailQuery): Promise<UserExistProjection> {
    // TODO: validate user by email
    const exist = await this._userQueryRepository.existByEmail(queryEmail.email, queryEmail._id);
    return exist;
  }
}
