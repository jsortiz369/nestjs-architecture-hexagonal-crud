import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { MatchModeType } from 'src/shared/domain/interfaces';

export class FilterSearchItemDto {
  @IsString({ message: 'The filter value must be a string' })
  @IsNotEmpty({ message: 'The filter value must not be empty' })
  @MaxLength(100, { message: `The filter value must not exceed 100 characters` })
  readonly value: string;

  @IsEnum(MatchModeType, { message: 'The match mode must be startsWith | contains | notContains| endsWith | equals | notEquals' }) // startsWith | contains | notContains| endsWith | equals | notEquals
  readonly matchMode: MatchModeType;
}
