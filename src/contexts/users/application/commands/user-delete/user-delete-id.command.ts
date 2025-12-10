import { UserPrimitive } from 'src/contexts/users/domain/user.interface';

export class UserDeleteIdCommand {
  /**
   * Creates an instance of UserDeleteIdCommand.
   * @date 2025-12-10 07:23:08
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {NonNullable<UserPrimitive['_id']>} _id
   */
  constructor(readonly _id: NonNullable<UserPrimitive['_id']>) {}
}
