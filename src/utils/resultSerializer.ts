import { Result, IError } from '@/types/Result';

export interface SerializedResult<T, E extends IError> {
  isSuccess: boolean;
  isFailure: boolean;
  value?: T;
  error?: E;
}

export function serializeResult<T, E extends IError>(result: Result<T, E>): SerializedResult<T, E> {
  return {
    isSuccess: result.isSuccess,
    isFailure: result.isFailure,
    value: result.isSuccess ? result.value : undefined,
    error: result.isFailure ? result.error : undefined,
  };
}

export function deserializeResult<T, E extends IError>(serialized: SerializedResult<T, E>): Result<T, E> {
  if (serialized.isSuccess) {
    return Result.ok(serialized.value!);
  } else {
    return Result.fail<T, E>(serialized.error!);
  }
} 