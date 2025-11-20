import { Controller, Get, Logger, Param } from '@nestjs/common';
import { UserFindOneByIdUseCase } from 'src/contexts/users/application';
import { PATHS } from 'src/shared/infrastructure/constants/routes.constant';
import { UuidDto } from 'src/shared/infrastructure/http/dtos';

@Controller(PATHS.USER)
export class UserFindOneByIdController {
  /**
   * Creates an instance of UserFindOneByIdController.
   * @date 2025-11-19 17:43:16
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {Logger} _logger
   * @param {UserFindOneByIdUseCase} _userFindOneByIdUseCase
   */
  constructor(
    private readonly _logger: Logger,
    private readonly _userFindOneByIdUseCase: UserFindOneByIdUseCase,
  ) {}

  @Get(':id')
  async run(@Param() param: UuidDto) {
    const result = await this._userFindOneByIdUseCase.run(param.id);
    this._logger.log(`get user by id ${param.id}`);
    return result;
  }
}
