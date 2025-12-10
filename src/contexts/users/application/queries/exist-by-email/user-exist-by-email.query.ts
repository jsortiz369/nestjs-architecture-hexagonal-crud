import { UserPrimitive } from 'src/contexts/users/domain/user.interface';

export class UserExistByEmailQuery {
  /**
   * Creates an instance of UserExistByEmailQuery.
   * @date 2025-12-10 07:21:47
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {NonNullable<Required<UserPrimitive['email']>>} email
   * @param {Partial<Pick<UserPrimitive, '_id'>>['_id']} _id
   */
  constructor(
    public readonly email: NonNullable<Required<UserPrimitive['email']>>,
    public readonly _id: Partial<Pick<UserPrimitive, '_id'>>['_id'],
  ) {}
}
