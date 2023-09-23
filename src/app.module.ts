import { DataSourceconfig } from "./config/data.source";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InventarioModule } from "./inventario/inventario.module";

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
    /* TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "1234", //* contraseña de la base de datos
      database: "shopProducts", //* nombre de la base de datos
      autoLoadEntities: true, //* carga todas las entidades automaticamente
      synchronize: true, //! Solo para desarrollo en produccion quitar
    }), */
    InventarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
