import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("/api/v1"); //*Este es el prefijo que se le agrega a todas las rutas

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //*Solo acepta los datos que estén definidos en el DTO
      forbidNonWhitelisted: true, //*Si hay un dato que no está definido en el DTO, no lo acepta
      transform: true, //*Transforma los datos a los tipos de datos que se definen en el DTO
    })
  ); //*Validación de datos

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle("Nombre de tu API")
    .setDescription("Descripción de tu API")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-docs", app, document);

  await app.listen(3000); //*Puerto en el que se ejecuta la aplicación
}
bootstrap();
