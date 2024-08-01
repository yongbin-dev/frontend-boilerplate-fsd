// https://tanstack.com/query/v4/docs/framework/react/examples/auto-refetching
// https://velog.io/@chltpdus48/React-Query-%EB%8F%84%EC%9E%85%EA%B8%B0

import { guideService } from "@/5_entities/Todo";
import { Todo } from "@/5_entities/Todo/model/Todo";
import { Button, Flex, Input, List } from "antd";
import { useState } from "react";
import css from "./TodoList.module.css";
import TodoText from "./TodoText";

export const TodoList = () => {
  const [intervalMs, setIntervalMs] = useState(1000);
  const [value, setValue] = useState<any>();

  const { todosData, isLoading, isFetching } = guideService.getAllTodos({
    refetchInterval: intervalMs,
  });

  const { mutate: addTodos } = guideService.addTodos();
  const { mutateAsync: deleteTodos } = guideService.deleteTodos();
  const { mutate: clearTodos } = guideService.clearTodos();

  const handleSubmit = () => {
    if (!value) return;
    const id = Array.isArray(todosData) ? todosData.length + 1 : 1;
    const todo: any = {
      id,
      text: value,
    };

    addTodos(todo, {});
  };

  const handleDelete = () => {
    deleteTodos().then(() => {
      console.log("delete");
    });
  };

  const handleClear = () => {
    clearTodos();
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (!todosData || !Array.isArray(todosData)) return <></>;

  return (
    <>
      <Flex className={css.wrapper} vertical gap={10}>
        <label>
          Query Interval speed (ms):{" "}
          <input
            value={intervalMs}
            onChange={(ev) => setIntervalMs(Number(ev.target.value))}
            type="number"
            step="100"
          />{" "}
          <span
            className={css.speed_span}
            style={{
              background: isFetching ? "green" : "transparent",
              transition: !isFetching ? "all .3s ease" : "none",
            }}
          />
        </label>
        <h2>Todo List</h2>

        <Flex gap={10}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Input
              placeholder="enter something"
              style={{ width: "300px" }}
              value={value}
              onChange={(ev) => setValue(ev.target.value)}
            />
          </form>

          <Flex gap={5}>
            <Button onClick={handleSubmit}>생성</Button>
            <Button onClick={handleDelete}>삭제</Button>
            <Button onClick={handleClear}>삭제</Button>
          </Flex>
        </Flex>

        <Flex justify="center" style={{ marginTop: "70px" }}>
          <List>
            {todosData.map((item: Todo) => (
              <List.Item key={item.id}>
                <TodoText item={item} />
              </List.Item>
            ))}
          </List>
        </Flex>
      </Flex>
    </>
  );
};
