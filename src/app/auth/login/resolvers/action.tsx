import { createServerAction } from "zsa";
import { LoginFormSchema } from "./schema";
import { Urls } from "@/utils/Urls";
import LoginResponse from "@/types/AuthTypes/LoginResponse";
import { Result } from "@/types/Result";
import { ProblemDetails } from "@/types/Result/ProblemDetails";

export const loginAction = createServerAction()
  .input(LoginFormSchema)
  .handler(async ({ input }): Promise<Result<LoginResponse, ProblemDetails>> => {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(Urls.auth.login, {
      method: "POST",
      body: JSON.stringify(input),
      headers,
    });

    if (!response.ok) {
      const err = await response.json() as ProblemDetails;
      return Result.fail(err);
    }
    
    const data = await response.json() as LoginResponse;
    return Result.ok(data);
  });
