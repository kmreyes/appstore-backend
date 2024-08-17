import { Injectable } from '@nestjs/common';
import { CreateAplicacioneDto } from './dto/create-aplicacione.dto';
import { UpdateAplicacioneDto } from './dto/update-aplicacione.dto';
import { Aplicacion } from './entities/aplicacione.entity';

@Injectable()
export class AplicacionesService {
  Aplicaciones: Aplicacion[] = [];

  create(createAplicacioneDto: CreateAplicacioneDto) {
    const app: Aplicacion = new Aplicacion();
    app.id = this.Aplicaciones.length + 1;
    app.descargas = 0;
    app.calificacion = 0;
    app.nombre = createAplicacioneDto.nombre;
    app.version = createAplicacioneDto.version;
    app.precio = createAplicacioneDto.precio;
    app.tamano = createAplicacioneDto.tamano;
    app.sistemaOperativo = createAplicacioneDto.sistemaOperativo;
    this.Aplicaciones.push(app);
    return app
  }

  findAll(nombre, SO){
    let aplicacionesFiltradas: Aplicacion[] = [];
    if(nombre && SO){
      for(let i: number = 0; i < this.Aplicaciones.length; i++){
        if(this.Aplicaciones[i].nombre.includes(nombre) && this.Aplicaciones[i].sistemaOperativo.includes(SO)){
          aplicacionesFiltradas.push(this.Aplicaciones[i]);}
      }
    }else if(nombre){
      for(let i: number = 0; i < this.Aplicaciones.length; i++){
        if(this.Aplicaciones[i].nombre.includes(nombre)){
          aplicacionesFiltradas.push(this.Aplicaciones[i]);}
      }
    }else if(SO){
      for(let i: number = 0; i < this.Aplicaciones.length; i++){
        if(this.Aplicaciones[i].sistemaOperativo.includes(SO)){
          aplicacionesFiltradas.push(this.Aplicaciones[i]);}
      }
    }else{
      aplicacionesFiltradas = this.Aplicaciones;
    }
    return aplicacionesFiltradas;
  }

  findOne(id: number) {
    const resultado = this.Aplicaciones.find(
      (element: Aplicacion) => element.id == id);
    return resultado;
  }

  update(id: number, updateAplicacioneDto: UpdateAplicacioneDto) {
    let resultado: Aplicacion;
    for(let i: number = 0; i < this.Aplicaciones.length; i++){
      if(this.Aplicaciones[i].id == id){
        this.Aplicaciones[i].precio = updateAplicacioneDto.precio;
        this.Aplicaciones[i].tamano = updateAplicacioneDto.tamano;
        this.Aplicaciones[i].version = updateAplicacioneDto.version;
        resultado = this.Aplicaciones[i];}
    }
    return resultado;
  }

  remove(id: number) {
    if(this.findOne(id)){
      this.Aplicaciones.splice(this.Aplicaciones.indexOf(this.findOne(id)), 1);
      return true;
    }
    return false;
  }
}
