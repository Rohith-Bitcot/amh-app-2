"use server";
import { fetchGraphQLMutation } from "..";
import { REFRESH_TOKEN_MUTATION, SIGN_IN_MUTATION } from "./query";

export const signInAction = async ({
  variables,
}: {
  variables: { input: Record<string, unknown> };
}): Promise<unknown> => {
  const res = await fetchGraphQLMutation<unknown>(SIGN_IN_MUTATION, variables);
  return res;
};

export const refreshToken = async (refreshToken: string): Promise<unknown> => {
  const variables = { refreshToken };
  const res = await fetchGraphQLMutation<unknown>(
    REFRESH_TOKEN_MUTATION,
    variables,
  );
  return res;
};
