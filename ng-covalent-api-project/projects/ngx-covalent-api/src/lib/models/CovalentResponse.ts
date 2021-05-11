export interface CovalentResponse<T> {
  data: T;
  error: boolean;
  error_message: String;
  error_code: any;
}
