/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type DateString = string & { readonly __brand: unique symbol }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: Date; output: Date; }
};

export type BigIntFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<BigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type BytesFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BytesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Dummy = {
  bigInt: Maybe<Scalars['String']['output']>;
  bytes: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  float: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  int: Maybe<Scalars['Int']['output']>;
  text: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type DummyAvgAggregate = {
  bigInt: Maybe<Scalars['Float']['output']>;
  float: Maybe<Scalars['Float']['output']>;
  int: Maybe<Scalars['Float']['output']>;
};

export type DummyCountAggregate = {
  _all: Scalars['Int']['output'];
  bigInt: Scalars['Int']['output'];
  bytes: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  float: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  int: Scalars['Int']['output'];
  text: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type DummyCreateInput = {
  bigInt?: InputMaybe<Scalars['String']['input']>;
  bytes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  float?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  int?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DummyMaxAggregate = {
  bigInt: Maybe<Scalars['String']['output']>;
  bytes: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  float: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['String']['output']>;
  int: Maybe<Scalars['Int']['output']>;
  text: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type DummyMinAggregate = {
  bigInt: Maybe<Scalars['String']['output']>;
  bytes: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  float: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['String']['output']>;
  int: Maybe<Scalars['Int']['output']>;
  text: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type DummySumAggregate = {
  bigInt: Maybe<Scalars['String']['output']>;
  float: Maybe<Scalars['Float']['output']>;
  int: Maybe<Scalars['Int']['output']>;
};

export type DummyUpdateInput = {
  bigInt?: InputMaybe<Scalars['String']['input']>;
  bytes?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  float?: InputMaybe<Scalars['Float']['input']>;
  int?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DummyWhereInput = {
  AND?: InputMaybe<Array<DummyWhereInput>>;
  NOT?: InputMaybe<Array<DummyWhereInput>>;
  OR?: InputMaybe<Array<DummyWhereInput>>;
  bigInt?: InputMaybe<BigIntFilter>;
  bytes?: InputMaybe<BytesFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  float?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  int?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DummyWhereUniqueInput = {
  AND?: InputMaybe<Array<DummyWhereInput>>;
  NOT?: InputMaybe<Array<DummyWhereInput>>;
  OR?: InputMaybe<Array<DummyWhereInput>>;
  bigInt?: InputMaybe<BigIntFilter>;
  bytes?: InputMaybe<BytesFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  float?: InputMaybe<FloatFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  int?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  createDummy: Dummy;
  deleteDummy: Dummy;
  updateDummy: Dummy;
};


export type MutationCreateDummyArgs = {
  data: InputMaybe<DummyCreateInput>;
};


export type MutationDeleteDummyArgs = {
  where: DummyWhereUniqueInput;
};


export type MutationUpdateDummyArgs = {
  data: DummyUpdateInput;
  where: DummyWhereUniqueInput;
};

export type Query = {
  dummies: Array<Dummy>;
  dummy: Dummy;
};


export type QueryDummyArgs = {
  where: DummyWhereUniqueInput;
};

export type QueryMode =
  | 'default'
  | 'insensitive';

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type GetDummiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDummiesQuery = { dummies: Array<{ id: string, text: string | null, createdAt: Date, updatedAt: Date }> };


export const GetDummiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDummies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dummies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetDummiesQuery, GetDummiesQueryVariables>;