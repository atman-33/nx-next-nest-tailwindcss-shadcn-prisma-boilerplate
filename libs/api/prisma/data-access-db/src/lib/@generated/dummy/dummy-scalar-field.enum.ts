import { registerEnumType } from '@nestjs/graphql';

export enum DummyScalarFieldEnum {
    id = "id",
    text = "text",
    int = "int",
    float = "float",
    bytes = "bytes",
    bigInt = "bigInt",
    json = "json",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DummyScalarFieldEnum, { name: 'DummyScalarFieldEnum', description: undefined })
