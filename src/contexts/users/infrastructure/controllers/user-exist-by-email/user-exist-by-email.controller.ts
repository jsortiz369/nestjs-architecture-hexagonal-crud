import { Controller, Get, Query } from '@nestjs/common';

import { ROUTES } from 'src/app/http/routes';
import { UserExistByEmailDto } from './user-exist-by-email.dto';
import { UserExistByEmailHandler, UserExistByEmailQuery } from 'src/contexts/users/application';

@Controller(ROUTES.USERS)
export class UserExistByEmailController {
  /**
   * Creates an instance of UserExistByEmailController.
   * @date 2025-12-10 07:48:43
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserExistByEmailHandler} _handler
   */
  constructor(private readonly _handler: UserExistByEmailHandler) {}

  @Get('exist/email')
  async execute(@Query() queryDTO: UserExistByEmailDto) {
    const result = await this._handler.execute(new UserExistByEmailQuery(queryDTO.email, queryDTO?.id));
    return result;
  }
}
