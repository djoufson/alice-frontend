import LoginResponse from "@/types/AuthTypes/LoginResponse";
import { ProblemDetails } from "@/types/Result/ProblemDetails";
import { ApiRoutes } from "@/utils/ApiRoutes";
import { HttpClient } from "./HttpClient";
import { envConfig } from "./constants";

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

  async login(email: string, password: string) {
    return this.http.post<
      { email: string; password: string },
      LoginResponse,
      ProblemDetails
    >(ApiRoutes.auth.login, { email, password });
  }
}

export const aliceApi = new AliceApiClient(envConfig.NEXT_PUBLIC_BASE_API_URL!);
