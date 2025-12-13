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
  password: string;
  status: StatusType;
  role: RoleType;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type UserCreatePrimitive = Omit<UserPrimitive, 'createdAt' | 'updatedAt' | 'deletedAt'>;
