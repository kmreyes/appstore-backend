import { ApiProperty } from "@nestjs/swagger";
import { sistemaOperativo } from "./sistema-operativo";

export class Aplicacion {
    @ApiProperty()
    public id: number; //(identificador único de la aplicación, generado automáticamente)
    @ApiProperty()
    public nombre: String; //(nombre de la aplicación)
    @ApiProperty()
    public precio: number; //(precio de la aplicación, puede ser 0 para aplicaciones gratuitas)
    @ApiProperty()
    public sistemaOperativo: sistemaOperativo; //(sistema operativo compatible: "Android", "iOS")
    @ApiProperty()
    public calificacion: number; //(calificación promedio de la aplicación basada en las reseñas de los usuarios)
    @ApiProperty()
    public tamano: number; //(tamaño de la aplicación en MB)
    @ApiProperty()
    public version: String; //(versión de la aplicación)
    @ApiProperty()
    public descargas: number; //(número de descargas de la aplicación)

}
