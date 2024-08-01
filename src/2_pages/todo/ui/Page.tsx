import { TodoDetail, TodoList } from "@/3_widgets/TodoList";
import { useParams } from "react-router-dom";
import css from "./Page.module.css";

export const TodoPage = () => {
  const params = useParams();
  const todoId: any = params.todoId;

  return (
    <div className={css.pages}>
      {!todoId ? (
        <TodoList />
      ) : (
        <TodoDetail todoId={todoId} />
      )}
    </div>
  );
};
