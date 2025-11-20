import { DataNotEmptyException } from 'src/shared/domain/exceptions';
import { UserExistByEmailService, UserFindOneByIdService } from '../domain/services';
import { UserCreate } from '../domain/user.interface';
import { UserRepository } from '../domain/user.repository';
import { User } from '../domain/user';
import * as vo from '../domain/vo';

export class UserUpdateUseCase {
  /**
   * Creates an instance of UserUpdateUseCase.
   * @date 2025-11-19 17:55:59
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserFindOneByIdService} _userFindOneByIdService
   * @param {UserExistByEmailService} _userExistByEmailService
   * @param {UserRepository} _userRepository
   */
  constructor(
    private readonly _userFindOneByIdService: UserFindOneByIdService,
    private readonly _userExistByEmailService: UserExistByEmailService,
    private readonly _userRepository: UserRepository,
  ) {}

  async run(id: string, user: Partial<UserCreate>) {
    if (Object.keys(user).length === 0) throw new DataNotEmptyException();

    // TODO: Validate exist user by id
    const dataUser = await this._userFindOneByIdService.run(id);

    // TODO: Validate is not exist user by email
    if (user.email) await this._userExistByEmailService.run(user.email, id);

    const dataUpdate = User.create({
      id: dataUser._id,
      firstName: user.firstName === undefined ? dataUser.firstName : new vo.UserFirstName(user.firstName),
      secondName: user.secondName === undefined ? dataUser.secondName : new vo.UserSecondName(user.secondName),
      firstSurname: user.firstSurname === undefined ? dataUser.firstSurname : new vo.UserFirstSurname(user.firstSurname),
      secondSurname: user.secondSurname === undefined ? dataUser.secondSurname : new vo.UserSecondSurname(user.secondSurname),
      birthday: user.birthday === undefined ? dataUser.birthday : new vo.UserBirthday(user.birthday),
      phone: user.phone === undefined ? dataUser.phone : new vo.UserPhone(user.phone),
      email: user.email === undefined ? dataUser.email : new vo.UserEmail(user.email),
      password: user.password === undefined ? dataUser.password : new vo.UserPassword(user.password),
      role: user.role === undefined ? dataUser.role : new vo.UserRole(user.role),
      status: user.status === undefined ? dataUser.status : new vo.UserStatus(user.status),
    });

    const result = await this._userRepository.update(dataUpdate);
    return result.toPrimitives();
  }
}
