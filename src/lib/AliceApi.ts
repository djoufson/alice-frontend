import LoginResponse from "@/types/ApiResponses/LoginResponse";
import { ProblemDetails } from "@/types/Result/ProblemDetails";
import { ApiRoutes } from "@/utils/ApiRoutes";
import { HttpClient } from "./HttpClient";
import { envConfig } from "./constants";
import { Result } from "@/types/Result";
import UserResponse from "@/types/ApiResponses/UserResponse";

export default class AliceApiClient {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl);
  }

  setToken(token: string) {
    this.http.setToken(token);
  }

  clearToken() {
    this.http.clearToken();
  }

  async login(
    email: string,
    password: string
  ): Promise<Result<LoginResponse, ProblemDetails>> {
    return this.http.post<
      { email: string; password: string },
      LoginResponse,
      ProblemDetails
    >(ApiRoutes.auth.login, { email, password });
  }

  async getCurrentUser(): Promise<Result<UserResponse, ProblemDetails>> {
    return this.http.get<UserResponse, ProblemDetails>(ApiRoutes.auth.me);
  }
}

export const aliceApi = new AliceApiClient(envConfig.NEXT_PUBLIC_BASE_API_URL!);
