import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { setConfig } from './app.config';
import { AppModule } from './app.module';
import { useSwagger } from './swagger/swagger';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger(),
    cors: {
      origin: process.env.ALLOWED_ORIGINS,
      credentials: true,
    },
  });

  setConfig(app);
  useSwagger(app);
  app.enableCors();
  await app.listen(process.env.PORT, process.env.HOST);
  console.log(
    `Server is listening on http://${process.env.HOST}:${process.env.PORT}`,
  );
}
bootstrap();
