import { Controller, Get, Query } from '@nestjs/common';

import { UserFindAllHandler, UserFindAllQuery } from 'src/contexts/users/application/queries/find-all';
import { UserFindAllDto } from './user-find-all.dto';
import { ROUTES } from 'src/app/http/routes';
import { UserFindAllFilters } from 'src/contexts/users/application/queries/find-all/user-find-all.query';

@Controller(ROUTES.USERS)
export class UserFindAllController {
  /**
   * Creates an instance of UserFindAllController.
   * @date 2025-12-10 07:48:33
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserFindAllHandler} _handler
   */
  constructor(private readonly _handler: UserFindAllHandler) {}

  @Get()
  async execute(@Query() query: UserFindAllDto) {
    const result = await this._handler.execute(
      new UserFindAllQuery(
        query.page,
        query.limit,
        query.sortOrder,
        query.sort,
        query.search,
        new UserFindAllFilters(query.filters?.email, query.filters?.status, query.filters?.role),
      ),
    );

    return result;
  }
}
