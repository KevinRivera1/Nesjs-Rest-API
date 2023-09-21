import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateInventarioDto {
  @IsString()
  @ApiProperty()
  nombre: string;

  @IsString()
  @ApiProperty()
  descripcion: string;

  @IsInt()
  @IsPositive()
  @ApiProperty()
  cantidad: number;

  @IsOptional()
  @ApiProperty({ type: Date })
  fecha: Date;
}


