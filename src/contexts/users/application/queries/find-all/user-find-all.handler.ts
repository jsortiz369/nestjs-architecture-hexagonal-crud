import { UserQueryRepository } from 'src/contexts/users/domain/repositories';
import { UserFindAllQuery } from './user-find-all.query';
import { PageNotFoundException } from 'src/shared/system/domain/exceptions';

export class UserFindAllHandler {
  /**
   * Creates an instance of UserFindAllHandler.
   * @date 2025-12-10 07:34:49
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserQueryRepository} _userQueryRepository
   */
  constructor(private readonly _userQueryRepository: UserQueryRepository) {}

  async execute(query: UserFindAllQuery) {
    // TODO: get all user
    const result = await this._userQueryRepository.findAll(query);

    // TODO: validate page
    if (query.page != 1 && result.meta.lastPage < result.meta.page) throw new PageNotFoundException();

    return {
      meta: result.meta,
      data: result.data,
    };
  }
}
