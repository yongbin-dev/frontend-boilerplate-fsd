import {
  MutationOptions,
  QueryKey,
  QueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { HttpMethod } from "../model/HttpMethod";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const useBaseQuery = (
  queryApi: string,
  queryKey? : any, 
  customOption? : any
) => {

  const options = customOption;

  const result: UseQueryResult<any> = useQuery({
    queryKey,
    queryFn: async () => {
      return fetchApi(queryApi, HttpMethod.GET, null);
    },
    select: (data) => {
      if (customOption && customOption.selectFn){
        if (Array.isArray(data)) {
          return data.map((d: any) => customOption.selectFn(d));
        }
      }
      return data;
    },
    ...options,
  });

  if (result.error) {
    console.error(`Error : ${result.error.message}`);
  }

  return { ...result };
};

export const useCreateMutation = (queryApi: string, queryKey?: QueryKey) => {
  return baseMutation(queryApi, HttpMethod.POST, queryKey);
};

export const useUpdateMutation = (queryApi: string, queryKey?: QueryKey) => {
  return baseMutation(queryApi, HttpMethod.PUT, queryKey);
};

export const useDeleteMutation = (queryApi: string, queryKey?: QueryKey) => {
  return baseMutation(queryApi, HttpMethod.DELETE, queryKey);
};

const baseMutation = (
  queryApi: string,
  queryMethod: HttpMethod,
  queryKey: any,
  options?: MutationOptions
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => fetchApi(queryApi, queryMethod, data),
    onSuccess: (data) => {
      if (queryKey) {
        queryClient.invalidateQueries(queryKey);
        queryClient.setQueryData(queryKey, data);
      }
    },
    onError: () => {
      console.log("실패");
    },
    onSettled: () => {},
    ...options,
  });
};

export const fetchApi = async (
  endpoint: string,
  method: HttpMethod,
  data: any,
  headers?: HeadersInit
) => {
  const option: any = {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  };

  if (method === HttpMethod.GET) {
    delete option.body;
  }
  // const response = await fetch(`${API_URL}${endpoint}`, {
  const response = await fetch(`${endpoint}`, {
    method,
    ...option,
  });
  return response.json();
};
