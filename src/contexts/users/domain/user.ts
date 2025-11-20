import { UserCreateVo, UserPrimitive, UserVO } from './user.interface';
import * as vo from './vo';

type ToPrimitives = Pick<UserPrimitive, 'id'> & Partial<Omit<UserPrimitive, 'id'>>;

export class User {
  readonly _id: vo.UserId;
  readonly firstName: vo.UserFirstName;
  readonly secondName: vo.UserSecondName;
  readonly firstSurname: vo.UserFirstSurname;
  readonly secondSurname: vo.UserSecondSurname;
  readonly birthday: vo.UserBirthday;
  readonly phone: vo.UserPhone;
  readonly email: vo.UserEmail;
  readonly photo: vo.UserPhoto;
  readonly password: vo.UserPassword;
  readonly status: vo.UserStatus;
  readonly role: vo.UserRole;
  readonly createdAt: vo.UserCreatedAt;
  readonly updatedAt: vo.UserUpdatedAt;
  readonly deletedAt: vo.UserDeletedAt;

  /**
   * Creates an instance of User.
   * @date 2025-11-19 16:11:08
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {UserVO} vo
   */
  constructor(vo: UserVO) {
    this._id = vo.id;
    this.firstName = vo.firstName;
    this.secondName = vo.secondName;
    this.firstSurname = vo.firstSurname;
    this.secondSurname = vo.secondSurname;
    this.birthday = vo.birthday;
    this.phone = vo.phone;
    this.email = vo.email;
    this.photo = vo.photo;
    this.password = vo.password;
    this.status = vo.status;
    this.role = vo.role;
    this.createdAt = vo.createdAt;
    this.updatedAt = vo.updatedAt;
    this.deletedAt = vo.deletedAt;
  }

  /**
   * @description Create instance of user
   * @date 2025-11-19 16:11:14
   * @author Jogan Ortiz Muñoz
   *
   * @static
   * @param {UserCreateVo} user
   * @returns {User}
   */
  static create(user: UserCreateVo) {
    return new User({ ...user } as UserVO);
  }

  /**
   * @description Create instance of user from primitives
   * @date 2025-11-19 16:11:27
   * @author Jogan Ortiz Muñoz
   *
   * @static
   * @param {UserPrimitive} primitive
   * @returns {User}
   */
  static fromPrimitives(primitive: UserPrimitive) {
    const user = {} as UserVO;
    user.id = new vo.UserId(primitive.id);

    if (primitive.firstName) user.firstName = new vo.UserFirstName(primitive.firstName);
    if (primitive.secondName) user.secondName = new vo.UserSecondName(primitive.secondName);
    if (primitive.firstSurname) user.firstSurname = new vo.UserFirstSurname(primitive.firstSurname);
    if (primitive.secondSurname) user.secondSurname = new vo.UserSecondSurname(primitive.secondSurname);
    if (primitive.birthday) user.birthday = new vo.UserBirthday(primitive.birthday);
    if (primitive.phone) user.phone = new vo.UserPhone(primitive.phone);
    if (primitive.email) user.email = new vo.UserEmail(primitive.email);
    if (primitive.photo) user.photo = new vo.UserPhoto(primitive.photo);
    if (primitive.password) user.password = new vo.UserPassword(primitive.password);
    if (primitive.status) user.status = new vo.UserStatus(primitive.status);
    if (primitive.role) user.role = new vo.UserRole(primitive.role);
    if (primitive.createdAt) user.createdAt = new vo.UserCreatedAt(primitive.createdAt);
    if (primitive.updatedAt) user.updatedAt = new vo.UserUpdatedAt(primitive.updatedAt);
    if (primitive.deletedAt) user.deletedAt = new vo.UserDeletedAt(primitive.deletedAt);

    return new User(user);
  }

  /**
   * @description Get user primitives
   * @date 2025-11-19 16:15:19
   * @author Jogan Ortiz Muñoz
   *
   * @returns {ToPrimitives}
   */
  toPrimitives(): ToPrimitives {
    return {
      id: this._id._value,
      firstName: this.firstName?._value,
      secondName: this.secondName?._value || undefined,
      firstSurname: this.firstSurname?._value,
      secondSurname: this.secondSurname?._value || undefined,
      birthday: this.birthday?._value,
      phone: this.phone?._value || undefined,
      email: this.email?._value,
      photo: this.photo?._value || undefined,
      password: this.password?._value,
      status: this.status?._value,
      role: this.role?._value,
      createdAt: this.createdAt?._value,
      updatedAt: this.updatedAt?._value,
      deletedAt: this.deletedAt?._value,
    };
  }
}
