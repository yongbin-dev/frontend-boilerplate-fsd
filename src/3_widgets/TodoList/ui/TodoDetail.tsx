import { guideService } from "@/5_entities/Todo";
import { Todo } from "@/5_entities/Todo/model/Todo";
import { Flex } from "antd";

interface Props {
  todoId: number;
}

export const TodoDetail = ({ todoId }: Props) => {
  const { data, isLoading } = guideService.getTodo(todoId);

  if (isLoading) return <></>;
  if (!data) return;

  return (
    <Flex vertical>
      <Flex>ID : {data.id}</Flex>
      <Flex>TEXT : {data.text}</Flex>
    </Flex>
  );
};
