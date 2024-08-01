import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Todo } from "./Todo";

interface TodosState {
  // todos : Todos[]
  todos: Todo[];
  addTodos: (Todo: Todo) => void;
  deleteTodos: (Todo: Todo) => void;
}

export const useTodosSlice = create(
  persist<TodosState>(
    (set) => ({
      todos: [],
      addTodos: () =>
        set((state) => ({
          todos: state.todos,
          // todos: state.count + 1
        })),
      deleteTodos: () =>
        set((state) => ({
          todos: state.todos,
        })),
    }),
    {
      name: "todosStorage",
    }
  )
);
