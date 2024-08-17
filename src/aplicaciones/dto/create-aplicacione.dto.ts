import { ApiProperty } from "@nestjs/swagger";
import { sistemaOperativo } from "../entities/sistema-operativo";

export class CreateAplicacioneDto {
    @ApiProperty()
    public nombre: String; //(nombre de la aplicación)
    @ApiProperty()
    public precio: number; //(precio de la aplicación, puede ser 0 para aplicaciones gratuitas)
    @ApiProperty()
    public sistemaOperativo: sistemaOperativo; //(sistema operativo compatible: "Android", "iOS")
    @ApiProperty()
    public tamano: number; //(tamaño de la aplicación en MB)
    @ApiProperty()
    public version: String; //(versión de la aplicación)
}
