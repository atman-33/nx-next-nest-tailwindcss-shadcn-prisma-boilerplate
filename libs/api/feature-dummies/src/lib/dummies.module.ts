import { PrismaModule } from '@libs/api/prisma/data-access-db';
import { Module } from '@nestjs/common';
import { DummiesResolver } from './dummies.resolver';
import { DummiesService } from './dummies.service';

@Module({
  providers: [DummiesResolver, DummiesService],
  imports: [PrismaModule]
})
export class DummiesModule {}
