import { Module } from '@nestjs/common';

import { DummiesModule } from '@libs/api/feature-dummies';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web/.next'),
      exclude: ['/api/*', '/api/graphql']
    }),

    // ---- Graphql ---- //
    DummiesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
