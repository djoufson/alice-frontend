import LoginResponse from "@/types/AuthTypes/LoginResponse";
import { ProblemDetails } from "@/types/Result/ProblemDetails";
import { Urls } from "@/utils/Urls";
import { HttpClient } from "./HttpClient";

// Example usage for login endpoint
export class AliceApiClient {
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
    >(Urls.auth.login, { email, password });
  }
}

export const aliceApi = new AliceApiClient("");
