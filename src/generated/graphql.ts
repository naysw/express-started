import * as TypeGraphQL from 'type-graphql';
export { TypeGraphQL };
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type FixDecorator<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

@TypeGraphQL.InterfaceType()
export abstract class Node {

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
};


@TypeGraphQL.ArgsType()
export class QueryUsersArgs {

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  skip?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  take?: Maybe<Scalars['Int']>;
};

@TypeGraphQL.ObjectType({ implements: Node })
export class User extends Node {
  __typename?: 'User';

  @TypeGraphQL.Field(type => String)
  email!: Scalars['String'];

  @TypeGraphQL.Field(type => String, { nullable: true })
  firstName?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => String, { nullable: true })
  lastName?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String)
  password!: Scalars['String'];
};
