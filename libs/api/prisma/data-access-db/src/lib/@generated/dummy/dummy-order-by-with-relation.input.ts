import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DummyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    int?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    float?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bytes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bigInt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    json?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}