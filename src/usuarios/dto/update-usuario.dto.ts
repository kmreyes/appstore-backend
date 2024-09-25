import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto {
    @ApiProperty()
    email: string; //correo electrónico del usuario
    @ApiProperty()
    password: string; //contraseña del usuario
}
