import { Controller, Delete, Logger, Param } from '@nestjs/common';
import { UserDeletedUseCase } from 'src/contexts/users/application';
import { PATHS } from 'src/shared/infrastructure/constants/routes.constant';
import { UuidDto } from 'src/shared/infrastructure/http/dtos';

@Controller(PATHS.USER)
export class UserDeleteController {
  /**
   * Creates an instance of UserDeleteController.
   * @date 2025-11-19 17:46:52
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {Logger} _logger
   * @param {UserDeletedUseCase} _userDeletedUseCase
   */
  constructor(
    private readonly _logger: Logger,
    private readonly _userDeletedUseCase: UserDeletedUseCase,
  ) {}

  @Delete(':id')
  async run(@Param() param: UuidDto) {
    const result = await this._userDeletedUseCase.run(param.id);
    this._logger.log(`User deleted ${(result as any)._id}`);
    return result;
  }
}
