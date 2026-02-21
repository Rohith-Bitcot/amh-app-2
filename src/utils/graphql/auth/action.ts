/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { fetchGraphQLMutation } from "..";
import { REFRESH_TOKEN_MUTATION, SIGN_IN_MUTATION } from "./query";

export const signInAction = async ({
  variables,
}: {
  variables: { input: any };
}): Promise<any> => {
  const res = await fetchGraphQLMutation<any>(SIGN_IN_MUTATION, variables);
  return res;
};

export const refreshToken = async (refreshToken: string): Promise<any> => {
  const variables = { refreshToken };
  const res = await fetchGraphQLMutation<any>(
    REFRESH_TOKEN_MUTATION,
    variables,
  );
  return res;
};
