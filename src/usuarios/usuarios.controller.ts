import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Response } from 'express';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  findAll(@Query('email') email:string) {
    return this.usuariosService.findAll(email);
  }

  @Get(':nombreusuario')
  findOne(@Param('nombreusuario') nombreusuario: string, @Res() res: Response) {
    const resultado = this.usuariosService.findOne(nombreusuario);
    if(resultado){
      res.status(200).send(resultado);
    }else{
      res.status(404).send({error:'El usuario no existe'});
    }
  }

  @Patch(':nombreusuario')
  update(@Param('nombreusuario') nombreusuario: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(nombreusuario, updateUsuarioDto);
  }

  @Delete(':nombreusuario')
  remove(@Param('nombreusuario') nombreusuario: string, @Res() res: Response) {
    const resultado = this.usuariosService.remove(nombreusuario);
    if(resultado){
      res.status(200).send();
    }else{
      res.status(404).send({error: 'El usuario no existe'});
    }
  }
}
