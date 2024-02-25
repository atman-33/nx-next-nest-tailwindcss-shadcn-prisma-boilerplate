import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateDummyInput } from './dto/create-dummy-input.dto';
import { DeleteDummyInput } from './dto/delete-dummy-input.dto';
import { GetDummyArgs } from './dto/get-dummy-args.dto';
import { UpdateDummyInput } from './dto/update-dummy-input.dto';
import { Dummy } from './models/dummy.model';
import { DummiesService } from './dummies.service';

@Resolver(() => Dummy)
export class DummiesResolver {
  constructor(private readonly dummiesService: DummiesService) {}

  @Query(() => [Dummy], { name: 'dummies' })
  async getDummies() {
    return await this.dummiesService.getDummies();
  }

  @Query(() => Dummy, { name: 'dummy' })
  async getDummy(@Args() getDummyArgs: GetDummyArgs) {
    return await this.dummiesService.getDummy(getDummyArgs);
  }

  @Mutation(() => Dummy, { name: 'createDummy' })
  async createDummy(@Args() createDummyData: CreateDummyInput) {
    return await this.dummiesService.createDummy(createDummyData);
  }

  @Mutation(() => Dummy, { name: 'updateDummy' })
  async updateDummy(@Args() updateDummyData: UpdateDummyInput) {
    return await this.dummiesService.updateDummy(updateDummyData);
  }

  @Mutation(() => Dummy, { name: 'deleteDummy' })
  async deleteDummy(@Args() deleteDummyData: DeleteDummyInput) {
    return await this.dummiesService.deleteDummy(deleteDummyData);
  }
}
