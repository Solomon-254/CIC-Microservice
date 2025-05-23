import { IsString, IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
export class PolicyDto{
      @IsString()
  @IsNotEmpty()
  clientNumber: string;

  @IsString()
  @IsNotEmpty()
  polcyNumber: string;

  @Type(() => Date)
  @IsDate()
  expiryDate: Date;
}