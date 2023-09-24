import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSourceconfig } from "./config/data.source";
import { InventarioModule } from "./inventario/inventario.module";
import { CarritoModule } from './carrito/carrito.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      ...DataSourceconfig,
      autoLoadEntities: true,
    }),
    InventarioModule,
    CarritoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
