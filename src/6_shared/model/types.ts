import { QueryOptions } from "@tanstack/react-query";

export type HttpMethod =
  | 'HEAD'
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  | 'QUERY'
  | 'OPTIONS';

export type FetchApiRecord = Record<
  string,
  string | string[] | number | boolean | null | undefined
>;

export type RequestBody = Blob | BufferSource | FormData | string;

// export type CustomQueryOptions<Type = unknown> = {
//   selectFn : Function ,
//   resultType : Type ,
//   refetchInterval : number
// }
