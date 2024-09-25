import { Injectable, UsePipes } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  usuarios: Usuario[] = [];
  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario: Usuario = new Usuario();
    usuario.nombreUsuario = createUsuarioDto.nombreUsuario;
    usuario.aplicacionesDescargadas = [];
    usuario.email = createUsuarioDto.email;
    usuario.password = createUsuarioDto.password;
    this.usuarios.push(usuario);
    return usuario;
  }

  findAll(email: string) {
    let usuariosFiltrados: Usuario[] = [];
    if(email){
      for(let i: number = 0; i < this.usuarios.length; i++){
        if(this.usuarios[i].email == email){
          usuariosFiltrados.push(this.usuarios[i]);
        }
      }
    }else{
      usuariosFiltrados = this.usuarios;
    }
    return usuariosFiltrados;
  }

  findOne(nombreUsuario: string) {
    const resultado = this.usuarios.find((element: Usuario) => element.nombreUsuario == nombreUsuario);
    return resultado;
  }

  update(nombreUsuario: string, updateUsuarioDto: UpdateUsuarioDto) {
    let resultado: Usuario = new Usuario()
    for(let i: number = 0; i < this.usuarios.length; i++){
      if(this.usuarios[i].nombreUsuario == nombreUsuario){
        this.usuarios[i].email = updateUsuarioDto.email;
        this.usuarios[i].password = updateUsuarioDto.password;
        resultado = this.usuarios[i];
      }
    }
    return resultado;
  }

  remove(nombreUsuario: string) {
    if(this.findOne(nombreUsuario)){
      this.usuarios.splice(this.usuarios.indexOf(this.findOne(nombreUsuario)), 1);
      return true;
    }
    return false;
  }
}
