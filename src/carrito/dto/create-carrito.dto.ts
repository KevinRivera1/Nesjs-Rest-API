import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateCarritoDto {
    
    @IsString()
    @ApiProperty()
    nombre: string;
  
    @IsString()
    @ApiProperty()
    descripcion: string;
  
    @IsNumber()
    @ApiProperty()
    precio: number;
  
    @IsNumber()
    @ApiProperty()
    cantidad: number;
  
    @IsString()
    @ApiProperty()
    imagen: string;

    @IsString()
    @ApiProperty()
    categoria: string;
}
