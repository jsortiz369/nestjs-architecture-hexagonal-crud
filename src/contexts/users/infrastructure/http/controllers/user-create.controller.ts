import { Body, Controller, Logger, Post } from '@nestjs/common';
import { PATHS } from 'src/shared/infrastructure/constants/routes.constant';
import { UserCreateDto } from '../dtos';
import { UserCreateUserCase } from 'src/contexts/users/application';

@Controller(PATHS.USER)
export class UserCreateController {
  /**
   * Creates an instance of UserCreateController.
   * @date 2025-11-19 17:42:59
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {Logger} _logger
   * @param {UserCreateUserCase} _userCreateUseCase
   */
  constructor(
    private readonly _logger: Logger,
    private readonly _userCreateUseCase: UserCreateUserCase,
  ) {}

  @Post()
  async run(@Body() body: UserCreateDto) {
    const result = await this._userCreateUseCase.run(body);
    this._logger.log(`User created ${(result as any)._id}`);
    return result;
  }
}
