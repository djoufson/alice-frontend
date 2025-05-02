export interface IError {
  message: string;
}

export class BaseResult<TResponse, TError extends IError> {
  private readonly _error?: TError;
  private readonly _value?: TResponse;
  public readonly isSuccess: boolean;
  public readonly isFailure: boolean;

  protected constructor(value?: TResponse, error?: TError) {
    this._value = value;
    this._error = error;
    this.isSuccess = value !== undefined;
    this.isFailure = error !== undefined;
  }

  public static fail<TResponse, TError extends IError>(error: TError): BaseResult<TResponse, TError> {
    return new BaseResult<TResponse, TError>(undefined, error);
  }

  public static ok<TResponse, TError extends IError>(value: TResponse): BaseResult<TResponse, TError> {
    return new BaseResult<TResponse, TError>(value);
  }

  public get value(): TResponse {
    if (!this.isSuccess) {
      throw new Error("Can't access the Value property since the result is a failure");
    }
    return this._value!;
  }

  public get error(): TError {
    if (!this.isFailure) {
      throw new Error("Can't access the Error property since the result is a success");
    }
    return this._error!;
  }
}

export class Result<TResponse, TError extends IError = IError> extends BaseResult<TResponse, TError> {
  protected constructor(value?: TResponse, error?: TError) {
    super(value, error);
  }

  public static fail<TResponse, TError extends IError>(error: TError): Result<TResponse, TError> {
    return new Result<TResponse, TError>(undefined, error);
  }

  public static ok<TResponse, TError extends IError>(value: TResponse): Result<TResponse, TError> {
    return new Result<TResponse, TError>(value);
  }
}

export class SimpleResult<TResponse> extends Result<TResponse, IError> {
  constructor(value?: TResponse) {
    if (value !== undefined) {
      super(value);
    } else {
      super(undefined, { message: "Default error" });
    }
  }
}
