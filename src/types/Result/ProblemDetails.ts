import { IError } from '../Result';

/**
 * ProblemDetails class that follows RFC 7807 - Problem Details for HTTP APIs
 * and implements the IError interface
 */
export class ProblemDetails implements IError {
  /**
   * A URI reference that identifies the problem type
   */
  readonly type: string;
  
  /**
   * A short, human-readable summary of the problem
   */
  readonly title: string;
  
  /**
   * The HTTP status code
   */
  readonly status?: number;
  
  /**
   * A human-readable explanation specific to this occurrence of the problem
   */
  readonly detail?: string;
  
  /**
   * A URI reference that identifies the specific occurrence of the problem
   */
  readonly instance?: string;
  
  /**
   * An array of error messages
   */
  readonly errors: string[];

  constructor(
    type: string,
    title: string,
    status?: number,
    detail?: string,
    instance?: string,
    errors: string[] = []
  ) {
    this.type = type;
    this.title = title;
    this.status = status;
    this.detail = detail;
    this.instance = instance;
    this.errors = errors;
  }
  
  /**
   * Implementation of IError's message property
   * Returns the title as the error message
   */
  get message(): string {
    return this.title;
  }
}