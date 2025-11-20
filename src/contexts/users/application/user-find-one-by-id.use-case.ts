import { UserFindOneByIdService } from '../domain/services';

export class UserFindOneByIdUseCase {
  /**
   * Creates an instance of UserFindOneByIdUseCase.
   * @date 2025-11-19 17:41:47
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserFindOneByIdService} _userByIdService
   */
  constructor(private readonly _userByIdService: UserFindOneByIdService) {}

  /**
   * @description
   * @date 2025-11-19 17:41:51
   * @author Jogan Ortiz Muñoz
   *
   * @async
   * @param {string} id
   * @returns {unknown}
   */
  async run(id: string) {
    const result = await this._userByIdService.run(id);
    return result.toPrimitives();
  }
}
