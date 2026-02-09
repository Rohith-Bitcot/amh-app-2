/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLClient } from "graphql-request";
import { cookies } from "next/headers";
// import { config } from '@/utils/config';
import { DocumentNode } from "@apollo/client";

export const graphqlClient = async () => {
  const token = (await cookies()).get("access_token")?.value;

  return new GraphQLClient(process.env.NEXT_PUBLIC_API_URL || "", {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
};

interface GQLError {
  message: string;
  code?: string;
  path?: string[];
}

export const fetchGraphQLQuery = async <T, V extends Record<string, any>>(
  query: DocumentNode,
  variables?: V,
): Promise<T | GQLError> => {
  try {
    return await (await graphqlClient()).request<T>(query, variables);
  } catch (err: any) {
    return err.response?.errors?.[0] ?? { message: err.message };
  }
};

export const fetchGraphQLMutation = async <T, V extends Record<string, any>>(
  mutation: DocumentNode,
  variables?: V,
): Promise<T | GQLError> => {
  try {
    return await (await graphqlClient()).request<T>(mutation, variables);
  } catch (err: any) {
    return err.response?.errors?.[0] ?? { message: err.message };
  }
};
