import { UserFindOneByIdService } from '../domain/services';
import { UserRepository } from '../domain/user.repository';

export class UserDeletedUseCase {
  /**
   * Creates an instance of UserDeletedUseCase.
   * @date 2025-11-19 17:45:19
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserFindOneByIdService} _userFindOneByIdService
   * @param {UserRepository} _userRepository
   */
  constructor(
    private readonly _userFindOneByIdService: UserFindOneByIdService,
    private readonly _userRepository: UserRepository,
  ) {}

  async run(id: string) {
    const user = await this._userFindOneByIdService.run(id);
    const result = await this._userRepository.delete(user._id);

    return result.toPrimitives();
  }
}
