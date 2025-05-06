"use server";

import { createServerAction } from "zsa";
import { LoginFormSchema } from "./schema";
import LoginResponse from "@/types/AuthTypes/LoginResponse";
import { ProblemDetails } from "@/types/Result/ProblemDetails";
import { serializeResult } from "@/utils/resultSerializer";
import { aliceApi } from "@/lib/AliceApi";

export const loginAction = createServerAction()
  .input(LoginFormSchema)
  .handler(
    async ({
      input,
    }): Promise<
      ReturnType<typeof serializeResult<LoginResponse, ProblemDetails>>
    > => {
      return serializeResult(await aliceApi.login(input.email, input.password));
    }
  );
