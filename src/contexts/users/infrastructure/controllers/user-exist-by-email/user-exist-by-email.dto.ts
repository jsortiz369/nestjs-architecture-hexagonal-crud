import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { UuidDto } from 'src/app/http/dto';

export class UserExistByEmailDto extends PartialType(UuidDto) {
  @IsString({ message: 'The email is not valid must be a string' })
  @IsNotEmpty({ message: 'The email is not empty' })
  @Length(1, 100, { message: 'The email must be between 1 and 100 characters' })
  readonly email: string;
}
