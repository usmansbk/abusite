/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n\tquery Me {\n\t\tme {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tfullName\n\t\t\temail\n\t\t\temailVerified\n\t\t\tisMe\n\t\t\tlanguage\n\t\t\tpicture\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.MeDocument,
    "\nmutation LoginWithSocialProvider($input: SocialLoginInput!) {\n  loginWithSocialProvider(input: $input) {\n    token\n  }\n}": types.LoginWithSocialProviderDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery Me {\n\t\tme {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tfullName\n\t\t\temail\n\t\t\temailVerified\n\t\t\tisMe\n\t\t\tlanguage\n\t\t\tpicture\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Me {\n\t\tme {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tfullName\n\t\t\temail\n\t\t\temailVerified\n\t\t\tisMe\n\t\t\tlanguage\n\t\t\tpicture\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation LoginWithSocialProvider($input: SocialLoginInput!) {\n  loginWithSocialProvider(input: $input) {\n    token\n  }\n}"): (typeof documents)["\nmutation LoginWithSocialProvider($input: SocialLoginInput!) {\n  loginWithSocialProvider(input: $input) {\n    token\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;