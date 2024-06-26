import { IsString, MinLength } from "class-validator";

export class CreateCarDto {

  @IsString()
  readonly model: string;
  
  @IsString()
  @MinLength(3)
  readonly brand: string;
}
