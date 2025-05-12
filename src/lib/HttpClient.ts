import { Result } from "@/types/Result";
import type { IError } from "@/types/Result";

/**
 * Generic HTTP client for API requests, inspired by C# Client pattern.
 */
export class HttpClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  setToken(token: string) {
    this.token = token;
  }

  clearToken() {
    this.token = null;
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };
    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }
    return headers;
  }

  async get<TResponse, TError extends IError>(
    route: string
  ): Promise<Result<TResponse, TError>> {
    return this.sendRequest<TResponse, TError>(route, "GET");
  }

  async delete<TResponse, TError extends IError>(
    route: string
  ): Promise<Result<TResponse, TError>> {
    return this.sendRequest<TResponse, TError>(route, "DELETE");
  }

  async post<TRequest, TResponse, TError extends IError>(
    route: string,
    request: TRequest
  ): Promise<Result<TResponse, TError>> {
    return this.sendRequest<TResponse, TError>(route, "POST", request);
  }

  async put<TRequest, TResponse, TError extends IError>(
    route: string,
    request: TRequest
  ): Promise<Result<TResponse, TError>> {
    return this.sendRequest<TResponse, TError>(route, "PUT", request);
  }

  private async sendRequest<TResponse, TError extends IError>(
    route: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    body?: unknown
  ): Promise<Result<TResponse, TError>> {
    const headers = this.getHeaders();
    const options: RequestInit = {
      method,
      headers,
      credentials: "include",
    };
    if (body !== undefined && method !== "GET" && method !== "DELETE") {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(this.baseUrl + route, options);
    const contentType = response.headers.get("content-type");
    let content: any = undefined;
    if (contentType && contentType.includes("application/json")) {
      content = await response.json();
    } else {
      content = await response.text();
    }
    if (response.ok) {
      return Result.ok<TResponse, TError>(content as TResponse);
    } else {
      return Result.fail<TResponse, TError>(content as TError);
    }
  }
}
