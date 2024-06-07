import { FC } from "react";
import { TodoItem } from "../../types/TodoItem";

interface ToDoCounterProps {
  onData: TodoItem[];
}

const ToDoCounter: FC<ToDoCounterProps> = ({ onData }) => {
  return (
    <span>{onData.filter((el) => el.checked !== true).length} items left</span>
  );
};
export default ToDoCounter;
