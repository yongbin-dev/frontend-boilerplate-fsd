// import { useQuery } from "@tanstack/react-query";

import {
  useBaseQuery,
  useCreateMutation,
  useDeleteMutation,
} from "@/6_shared/api";
import { MutationOptions, QueryOptions } from "@tanstack/react-query";

const TODOS_QUERIES = {
  TODOS: (todosId: number | undefined) => ["TODOS", todosId],
};

export const getExampleApi = () => {
  const { isLoading, isError, data, isSuccess } = useBaseQuery(`/example`);

  return {
    isExampleLoading: isLoading,
    isExampleError: isError,
    exampleData: data,
    isExampleSuccess: isSuccess,
  };
};

export const addTodos = (options?: MutationOptions) => {
  return useCreateMutation(`/api/todo`, [TODOS_QUERIES.TODOS]);
};

export const getAllTodos = (option?: any) => {
  const { status, data, error, isFetching, isLoading } = useBaseQuery(
    `/api/todo`,
    [TODOS_QUERIES.TODOS],
    option
  );

  return { todosStatus: status, todosData: data, isLoading, isFetching };
};

export const getTodo = (id: number, option?: object) => {
  const { status, data, error, isFetching, isLoading } = useBaseQuery(
    `/api/todo/${id}`,
    [TODOS_QUERIES.TODOS(id)]
  );

  return { data, isLoading };
};

export const deleteTodos = () => {
  return useDeleteMutation(`/api/todo`, [TODOS_QUERIES.TODOS]);
};

export const clearTodos = () => {
  return useDeleteMutation(`/api/todo/clear`, [TODOS_QUERIES.TODOS]);
};
