import { UserRepository } from 'src/contexts/users/domain/repositories';
import { UserFindOneByIdService } from 'src/contexts/users/domain/service';
import { UserPrimitive } from 'src/contexts/users/domain/user.interface';
import { UserDeleteIdCommand } from './user-delete-id.command';

export class UserDeleteHandler {
  /**
   * Creates an instance of UserDeleteHandler.
   * @date 2025-12-10 07:35:17
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserFindOneByIdService} _userFindOneByIdService
   * @param {UserRepository} _userRepository
   */
  constructor(
    private readonly _userFindOneByIdService: UserFindOneByIdService,
    private readonly _userRepository: UserRepository,
  ) {}

  async execute(idCommand: UserDeleteIdCommand): Promise<Omit<UserPrimitive, 'password'>> {
    // TODO: validate exist user by ID
    const user = await this._userFindOneByIdService.execute(idCommand._id);

    // TODO: delete user
    const userDelete = await this._userRepository.delete(user._id);

    // TODO: return user values primitives
    const userPrimitive = userDelete.toValuesPrimitives();
    return {
      _id: userPrimitive._id,
      firstName: userPrimitive.firstName,
      secondName: userPrimitive.secondName,
      firstSurname: userPrimitive.firstSurname,
      secondSurname: userPrimitive.secondSurname,
      birthday: userPrimitive.birthday,
      phone: userPrimitive.phone,
      email: userPrimitive.email,
      role: userPrimitive.role,
      status: userPrimitive.status,
      createdAt: userPrimitive.createdAt,
      updatedAt: userPrimitive.updatedAt,
    };
  }
}
