import { ApiProperty } from "@nestjs/swagger";
import { Aplicacion } from "src/aplicaciones/entities/aplicacione.entity"

export class Usuario {
    @ApiProperty({default:'kmreyes'})
    nombreUsuario: string; // identificador único del usuario
    @ApiProperty({default:'kmreyes@gmail.com'})
    email: string; //correo electrónico del usuario
    @ApiProperty({default:'123qwe'})
    password: string; //contraseña del usuario
    @ApiProperty()
    aplicacionesDescargadas: Aplicacion[]; // lista de aplicaciones descargadas por el usuario

}
