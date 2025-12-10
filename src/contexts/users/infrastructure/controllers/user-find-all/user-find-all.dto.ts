import { plainToInstance, Transform, Type } from 'class-transformer';
import { IsEnum, IsObject, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator';
import { FilterStringItemDto, FindFilterDto } from 'src/app/http/dto';
import { UserSort } from 'src/contexts/users/application/queries/find-all/user-find-all.query';

class UserFiltersDto {
  @IsOptional()
  @Transform(({ value }) => plainToInstance(FilterStringItemDto, value))
  @IsObject({ message: 'The email filter must be a valid object' })
  @ValidateNested({ message: 'The email filter must be a valid object' })
  readonly email?: FilterStringItemDto;
}

export class UserFindAllDto extends FindFilterDto {
  @IsOptional()
  @IsEnum(UserSort, {
    message: `The sort must be a valid value of the enum ${JSON.stringify(Object.values(UserSort).join(' | '))}`,
  })
  readonly sort: UserSort = UserSort.CREATED_AT;

  @IsOptional()
  @Transform(({ value }) => plainToInstance(UserFiltersDto, JSON.parse(value as string) ?? {}))
  @Type(() => UserFiltersDto)
  @ValidateNested({ message: 'The filters must be a valid object' })
  readonly filters?: UserFiltersDto;

  @IsOptional()
  @IsString({ message: 'The search must be a string' })
  @MaxLength(100, { message: 'The search must be less than 100 characters' })
  readonly search?: string;
}
