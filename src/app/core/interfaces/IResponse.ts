export interface IResponse<T>{
  count: number;
  status: string;
  results: T;
}
