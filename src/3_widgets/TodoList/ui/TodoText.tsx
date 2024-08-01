import { Todo } from "@/5_entities/Todo/model/Todo";
import { Link } from "react-router-dom";


interface Props {
  item : Todo
}

const TodoText = ({item} : Props) => {

  if(!item) return <></>;

  return (
    <Link to={`/todo/${item.id}`}>{item.text}</Link>
  )
}

export default TodoText;
