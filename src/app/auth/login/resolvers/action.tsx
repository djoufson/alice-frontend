"use server";

import { createServerAction } from "zsa";
import { LoginFormSchema } from "./schema";
import LoginResponse from "@/types/AuthTypes/LoginResponse";
import { ProblemDetails } from "@/types/Result/ProblemDetails";
import { serializeResult } from "@/utils/resultSerializer";
import { aliceApi } from "@/lib/AliceApi";
import { cookies } from "next/headers";
import { CookieKeys } from "@/utils/CookieKeys";

export const loginAction = createServerAction()
  .input(LoginFormSchema)
  .handler(
    async ({
      input,
    }): Promise<
      ReturnType<typeof serializeResult<LoginResponse, ProblemDetails>>
    > => {
      const result = await aliceApi.login(input.email, input.password);
      if (result.isSuccess) {
        const cookieStore = await cookies();
        aliceApi.setToken(result.value.token);
        cookieStore.set(CookieKeys.auth.token, result.value.token);
      }
      return serializeResult(result);
    }
  );
