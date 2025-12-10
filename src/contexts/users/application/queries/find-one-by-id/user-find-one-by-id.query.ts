import { UserPrimitive } from 'src/contexts/users/domain/user.interface';

export class UserFindOneByIdQuery {
  /**
   * Creates an instance of UserFindOneByIdQuery.
   * @date 2025-12-10 07:21:15
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {NonNullable<Partial<Pick<UserPrimitive, '_id'>>['_id']>} _id
   */
  constructor(public readonly _id: NonNullable<Partial<Pick<UserPrimitive, '_id'>>['_id']>) {}
}
