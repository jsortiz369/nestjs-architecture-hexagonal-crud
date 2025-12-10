import { Body, Controller, Param, Patch } from '@nestjs/common';

import { UuidDto } from 'src/app/http/dto';
import { ROUTES } from 'src/app/http/routes';
import { UserUpdateCommand, UserUpdateHandler, UserUpdateIdCommand } from 'src/contexts/users/application';
import { UserUpdateDto } from './user-update.dto';

@Controller(ROUTES.USERS)
export class UserUpdateController {
  /**
   * Creates an instance of UserUpdateController.
   * @date 2025-12-10 07:49:03
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserUpdateHandler} _handler
   */
  constructor(private readonly _handler: UserUpdateHandler) {}

  @Patch(':id')
  async execute(@Param() param: UuidDto, @Body() body: UserUpdateDto) {
    const result = await this._handler.execute(
      new UserUpdateIdCommand(param.id),
      new UserUpdateCommand(
        body.firstName,
        body.secondName,
        body.firstSurname,
        body.secondSurname,
        body.birthday,
        body.phone,
        body.email,
        body.password,
        body.role,
        body.status,
      ),
    );

    return result;
  }
}
