/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

import { env } from '@libs/shared/config';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());

  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  app.enableCors({
    origin: [
      env.PRODUCTION_ORIGIN || 'http://localhost:4200',
      'http://localhost:3333',
      'http://localhost:3000'
    ],
    credentials: true
  });

  const port = env.API_PORT || 3000;
  await app.listen(port);
  Logger.log(`🚀 Application playground is running on: http://localhost:${port}/api/graphql`);
}

bootstrap();
