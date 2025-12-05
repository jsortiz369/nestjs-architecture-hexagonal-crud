import { RoleType, StatusType } from 'src/shared/system/domain/system.interface';

export interface UserPrimitive {
  _id: string;
  firstName: string;
  secondName?: string | null;
  firstSurname: string;
  secondSurname?: string | null;
  birthday: Date;
  phone?: string | null;
  email: string;
  photo?: string | null;
  password: string;
  status: StatusType;
  role: RoleType;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type UserCreatePrimitive = Omit<UserPrimitive, 'createdAt' | 'updatedAt' | 'deletedAt'>;

/*export enum UserSort {
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

 export interface UserFilterFind {
  global?: { value: string; matchMode: MatchModeStringType };
}

export interface UserFind {
  page: number;
  limit: number;
  sort: UserSort;
  sortOrder: SortOrderType;
  filters?: UserFilterFind;
  search?: string;
}
 */
