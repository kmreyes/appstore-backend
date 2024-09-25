import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDto {
    @ApiProperty({default:'kmreyes'})
    nombreUsuario: string; // identificador único del usuario
    @ApiProperty({default:'kmreyes@gmail.com'})
    email: string; //correo electrónico del usuario
    @ApiProperty({default:'123qwe'})
    password: string; //contraseña del usuario
}
