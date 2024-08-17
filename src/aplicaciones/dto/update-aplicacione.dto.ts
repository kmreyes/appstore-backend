import { ApiProperty } from '@nestjs/swagger';

export class UpdateAplicacioneDto {
    @ApiProperty()
    public precio: number; //(precio de la aplicación, puede ser 0 para aplicaciones gratuitas)
    @ApiProperty()
    public tamano: number; //(tamaño de la aplicación en MB)
    @ApiProperty()
    public version: String; //(versión de la aplicación)
}
