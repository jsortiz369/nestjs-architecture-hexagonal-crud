import { Controller, Delete, Param } from '@nestjs/common';

import { UuidDto } from 'src/app/http/dto';
import { ROUTES } from 'src/app/http/routes';
import { UserDeleteHandler, UserDeleteIdCommand } from 'src/contexts/users/application';

@Controller(ROUTES.USERS)
export class UserDeleteController {
  /**
   * Creates an instance of UserDeleteController.
   * @date 2025-12-10 06:40:40
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserDeleteHandler} _handler
   */
  constructor(private readonly _handler: UserDeleteHandler) {}

  @Delete(':id')
  async execute(@Param() param: UuidDto) {
    const result = await this._handler.execute(new UserDeleteIdCommand(param.id));
    return result;
  }
}
