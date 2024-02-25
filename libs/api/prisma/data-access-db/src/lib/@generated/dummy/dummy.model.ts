import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class Dummy {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    text!: string | null;

    @Field(() => Int, {nullable:true})
    int!: number | null;

    @Field(() => Float, {nullable:true})
    float!: number | null;

    @Field(() => String, {nullable:true})
    bytes!: Buffer | null;

    @Field(() => String, {nullable:true})
    bigInt!: bigint | null;

    @Field(() => GraphQLJSON, {nullable:true})
    json!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
