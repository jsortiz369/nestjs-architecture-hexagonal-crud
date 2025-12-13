import { MatchModeEnumType, MatchModeStringType } from 'src/shared/database/domain/database.interface';
import { SortOrderType } from 'src/shared/system/domain/system.interface';

export enum UserSort {
  FIRST_NAME = 'firstName',
  SECON_DNAME = 'secondName',
  FIRST_SURNAME = 'firstSurname',
  SECOND_SURNAME = 'secondSurname',
  BIRTHDAY = 'birthday',
  PHONE = 'phone',
  EMAIL = 'email',
  STATUS = 'status',
  ROLE = 'role',
  CREATED_AT = 'createdAt',
  UPDATED_AT = 'updatedAt',
}

export class UserFindAllQuery {
  /**
   * Creates an instance of UserFindAllQuery.
   * @date 2025-12-10 07:57:00
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {number} page
   * @param {number} limit
   * @param {SortOrderType} sortOrder
   * @param {UserSort} sort
   * @param {?string} [search]
   * @param {?{
   *       email?: { value: string; matchMode: MatchModeStringType };
   *     }} [filters]
   */
  constructor(
    readonly page: number,
    readonly limit: number,
    readonly sortOrder: SortOrderType,
    readonly sort: UserSort,
    readonly search?: string,
    readonly filters?: UserFindAllFilters,
  ) {}
}

export class UserFindAllFilters {
  constructor(
    readonly email?: { value: string; matchMode: MatchModeStringType },
    readonly status?: { value: string; matchMode: MatchModeEnumType },
    readonly role?: { value: string; matchMode: MatchModeEnumType },
  ) {}
}
