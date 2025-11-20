import { Controller, Get, Logger, Query } from '@nestjs/common';
import { PATHS } from 'src/shared/infrastructure/constants/routes.constant';
import { UserFindDto } from '../dtos';
import { UserFindUseCase } from 'src/contexts/users/application';

@Controller(PATHS.USER)
export class UserFindController {
  /**
   * Creates an instance of UserFindController.
   * @date 2025-11-19 18:31:49
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {Logger} _logger
   * @param {UserFindUseCase} _userFindUseCase
   */
  constructor(
    private readonly _logger: Logger,
    private readonly _userFindUseCase: UserFindUseCase,
  ) {}

  @Get()
  async run(@Query() query: UserFindDto) {
    this._logger.log('get users');
    return await this._userFindUseCase.run(query);
  }
}
