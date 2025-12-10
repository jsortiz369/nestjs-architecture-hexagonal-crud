import { Controller, Get, Param } from '@nestjs/common';

import { UuidDto } from 'src/app/http/dto';
import { ROUTES } from 'src/app/http/routes';
import { UserFindOneByIdHandler, UserFindOneByIdQuery } from 'src/contexts/users/application';

@Controller(ROUTES.USERS)
export class UserFindOneByIdController {
  /**
   * Creates an instance of UserFindOneByIdController.
   * @date 2025-12-10 07:48:57
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserFindOneByIdHandler} _handler
   */
  constructor(private readonly _handler: UserFindOneByIdHandler) {}

  @Get(':id')
  async execute(@Param() param: UuidDto) {
    const result = await this._handler.execute(new UserFindOneByIdQuery(param.id));
    return result;
  }
}
