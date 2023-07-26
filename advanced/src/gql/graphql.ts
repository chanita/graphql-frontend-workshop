/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** `DateTime` scalar type represents a date and time. DateTime is serialized as an RFC 3339 quoted string */
  DateTime: { input: any; output: any; }
  /** `JSON` scalar type represents an arbitrary JSON value. */
  JSON: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  body_html?: Maybe<Scalars['String']['output']>;
  canonical_url?: Maybe<Scalars['String']['output']>;
  collection_id?: Maybe<Scalars['Int']['output']>;
  comments_count?: Maybe<Scalars['Int']['output']>;
  cover_image?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  crossposted_at?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  edited_at?: Maybe<Scalars['DateTime']['output']>;
  flare_tag?: Maybe<FlareTag>;
  id?: Maybe<Scalars['Int']['output']>;
  last_comment_at?: Maybe<Scalars['DateTime']['output']>;
  organization?: Maybe<Organization>;
  path?: Maybe<Scalars['String']['output']>;
  positive_reactions_count?: Maybe<Scalars['Int']['output']>;
  public_reactions_count?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['DateTime']['output']>;
  published_timestamp?: Maybe<Scalars['DateTime']['output']>;
  readable_publish_date?: Maybe<Scalars['String']['output']>;
  reading_time_minutes?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  social_image?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tags?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type_of?: Maybe<Scalars['String']['output']>;
  upvotes?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  edges?: Maybe<Array<Maybe<ArticleEdge>>>;
  pageInfo: PageInfo;
};

export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Article>;
};

export type FlareTag = {
  __typename?: 'FlareTag';
  bg_color_hex?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  text_color_hex?: Maybe<Scalars['String']['output']>;
};

export type Login = {
  __typename?: 'Login';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<Login>;
  upvoteArticle?: Maybe<Scalars['JSON']['output']>;
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/**
 * Mutation root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `mutation`.
 *
 * If an operation is a `mutation`, the result of the operation is the result of executing the mutation’s
 * top level selection set on the `Mutation` root object type. This selection set is executed serially.
 *
 * It is expected that the top level fields in a `mutation` operation perform side‐effects on backend data systems.
 * Serial execution of the provided mutations ensures against race conditions during these side‐effects.
 */
export type MutationUpvoteArticleArgs = {
  postId?: InputMaybe<Scalars['String']['input']>;
};

export type Organization = {
  __typename?: 'Organization';
  name?: Maybe<Scalars['String']['output']>;
  profile_image?: Maybe<Scalars['String']['output']>;
  profile_image_90?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/**
 * PageInfo indicates if more results are available in a connection.
 * See *GraphQL Cursor Connections Specification*
 */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Cursor corresponding to the last node in edges */
  endCursor: Scalars['String']['output'];
  /** Indicates whether more edges exist following the set defined by the pagination arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior to the set defined by the pagination arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Cursor corresponding to the first node in edges */
  startCursor: Scalars['String']['output'];
};

/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles?: Maybe<Array<Maybe<Article>>>;
  paginatedArticles?: Maybe<ArticleConnection>;
  totalUpvotes?: Maybe<Scalars['Int']['output']>;
  upvotes?: Maybe<Scalars['JSON']['output']>;
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryArticlesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryPaginatedArticlesArgs = {
  after?: Scalars['String']['input'];
  first?: Scalars['Int']['input'];
  tag?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryTotalUpvotesArgs = {
  postId?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryUpvotesArgs = {
  postId?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  github_username?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  profile_image?: Maybe<Scalars['String']['output']>;
  profile_image_90?: Maybe<Scalars['String']['output']>;
  twitter_username?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  website_url?: Maybe<Scalars['String']['output']>;
};

export type GetArticlesQueryVariables = Exact<{
  tag?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetArticlesQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', id?: number | null, title?: string | null, description?: string | null, upvotes?: number | null, user?: { __typename?: 'User', username?: string | null } | null } | null> | null };

export type GetArticleByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetArticleByIdQuery = { __typename?: 'Query', article?: { __typename?: 'Article', id?: number | null, title?: string | null, description?: string | null, body_html?: string | null } | null };

export type UpvoteArticleMutationVariables = Exact<{
  postId?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpvoteArticleMutation = { __typename?: 'Mutation', upvoteArticle?: any | null };


export const GetArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tag"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tag"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"upvotes"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<GetArticlesQuery, GetArticlesQueryVariables>;
export const GetArticleByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticleById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"body_html"}}]}}]}}]} as unknown as DocumentNode<GetArticleByIdQuery, GetArticleByIdQueryVariables>;
export const UpvoteArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpvoteArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upvoteArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}]}]}}]} as unknown as DocumentNode<UpvoteArticleMutation, UpvoteArticleMutationVariables>;