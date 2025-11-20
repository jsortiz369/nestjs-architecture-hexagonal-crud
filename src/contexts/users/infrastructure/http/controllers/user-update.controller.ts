import { Body, Controller, Logger, Param, Patch } from '@nestjs/common';
import { UserUpdateUseCase } from 'src/contexts/users/application';
import { PATHS } from 'src/shared/infrastructure/constants/routes.constant';
import { UserUpdateDto } from '../dtos';
import { UuidDto } from 'src/shared/infrastructure/http/dtos';

@Controller(PATHS.USER)
export class UserUpdateController {
  /**
   * Creates an instance of UserUpdateController.
   * @date 2025-11-19 18:19:57
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {Logger} _logger
   * @param {UserUpdateUseCase} _userUpdateUseCase
   */
  constructor(
    private readonly _logger: Logger,
    private readonly _userUpdateUseCase: UserUpdateUseCase,
  ) {}

  @Patch(':id')
  async run(@Param() param: UuidDto, @Body() body: UserUpdateDto) {
    const result = await this._userUpdateUseCase.run(param.id, body);
    this._logger.log(`User updated ${(result as any)._id}`);
    return result;
  }
}
