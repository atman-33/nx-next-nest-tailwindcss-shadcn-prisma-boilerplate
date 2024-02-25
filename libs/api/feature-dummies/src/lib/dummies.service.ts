import { PrismaService } from '@libs/api/prisma/data-access-db';
import { Injectable } from '@nestjs/common';
import { CreateDummyInput } from './dto/create-dummy-input.dto';
import { DeleteDummyInput } from './dto/delete-dummy-input.dto';
import { GetDummyArgs } from './dto/get-dummy-args.dto';
import { UpdateDummyInput } from './dto/update-dummy-input.dto';

@Injectable()
export class DummiesService {
  constructor(private readonly prisma: PrismaService) {}

  async getDummies() {
    return await this.prisma.dummy.findMany();
  }

  async getDummy(getDummyArgs: GetDummyArgs) {
    return await this.prisma.dummy.findUnique({ where: getDummyArgs.where });
  }

  async createDummy(createDummyData: CreateDummyInput) {
    return await this.prisma.dummy.create({ data: createDummyData.data });
  }

  async updateDummy(updateDummyData: UpdateDummyInput) {
    return await this.prisma.dummy.update({
      where: updateDummyData.where,
      data: updateDummyData.data
    });
  }

  async deleteDummy(deleteDummyData: DeleteDummyInput) {
    return await this.prisma.dummy.delete({
      where: deleteDummyData.where
    });
  }
}
