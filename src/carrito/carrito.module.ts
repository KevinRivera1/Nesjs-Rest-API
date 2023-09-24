import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarritoController } from "./carrito.controller";
import { CarritoService } from "./carrito.service";
import { Carrito } from "./entities/carrito.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Carrito])],
  controllers: [CarritoController],
  providers: [CarritoService],
})
export class CarritoModule {}
