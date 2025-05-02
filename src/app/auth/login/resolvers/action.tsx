"use server";

import { createServerAction } from "zsa";
import { LoginFormSchema } from "./schema";
import { Urls } from "@/utils/Urls";
import LoginResponse from "@/types/AuthTypes/LoginResponse";
import { Result } from "@/types/Result";
import { ProblemDetails } from "@/types/Result/ProblemDetails";
import { serializeResult } from "@/utils/resultSerializer";

export const loginAction = createServerAction()
  .input(LoginFormSchema)
  .handler(
    async ({
      input,
    }): Promise<
      ReturnType<typeof serializeResult<LoginResponse, ProblemDetails>>
    > => {
      const headers = {
        "Content-Type": "application/json",
      };
      console.log(Urls.auth.login);
      const response = await fetch(Urls.auth.login, {
        method: "POST",
        body: JSON.stringify(input),
        headers,
      });

      if (!response.ok) {
        const err = (await response.json()) as ProblemDetails;
        return serializeResult(Result.fail(err));
      }

      const data = (await response.json()) as LoginResponse;
      return serializeResult(Result.ok<LoginResponse, ProblemDetails>(data));
    }
  );
