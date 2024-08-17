import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AplicacionesModule } from './aplicaciones/aplicaciones.module';

@Module({
  imports: [AplicacionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
