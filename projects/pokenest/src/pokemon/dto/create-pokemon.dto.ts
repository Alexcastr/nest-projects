import { IsInt, IsPositive, IsString, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsPositive()
  @IsInt()
  no: number;

  @MinLength(3)
  @IsString()
  name: string;
}
